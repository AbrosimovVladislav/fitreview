package co.fitreview.backend.web;

import co.fitreview.backend.dto.admin.*;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.review.ReviewResultsItem;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.integration.GCStorageClient;
import co.fitreview.backend.service.BodySegmentService;
import co.fitreview.backend.service.ReviewResultsItemService;
import co.fitreview.backend.service.ReviewService;
import co.fitreview.backend.web.mapper.AdminApiMapper;
import co.fitreview.backend.web.mapper.ReviewResultsItemMapper;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("api/v1/admin/public")
@RequiredArgsConstructor
public class AdminApi {

    private final GCStorageClient gcStorageClient;
    private final ReviewService reviewService;
    private final BodySegmentService bodySegmentService;
    private final ReviewResultsItemService reviewResultsItemService;
    private final AdminApiMapper adminApiMapper;
    private final ReviewResultsItemMapper reviewResultsItemMapper;

    @CrossOrigin
    @GetMapping("/reviews")
    public List<AdminShortReviewDto> getAdminShortReviewDtos() {
        List<Review> reviews = reviewService.getAllReviews();

        return reviews.stream().map(review -> {
            ReviewStatus actualStatus = reviewService.getLastReviewStatusById(review.getId());
            return adminApiMapper.map(review, actualStatus.getValue());
        }).toList();
    }

    @CrossOrigin
    @GetMapping("/review/{reviewId}")
    public AdminReviewDetailsDto getReviewDetailsById(@PathVariable Long reviewId) {
        return reviewService.getReviewById(reviewId)
                .map(adminApiMapper::map)
                .orElse(null);
    }

    @CrossOrigin
    @PostMapping(value = "/body-segment/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String, String>> saveImageForBodySegment(
            @RequestParam("bodySegmentId") Long bodySegmentId,
            @RequestParam("reviewId") Long reviewId,
            @RequestParam("imageType") String imageType,
            @RequestPart("file") MultipartFile file) {
        try {
            byte[] imageBytes = file.getBytes();
            String imageName = "review/" + reviewId + "/" + bodySegmentId + "-" + imageType + "-" + System.currentTimeMillis();
            String imageLink = gcStorageClient.uploadImage(imageBytes, imageName, MediaType.IMAGE_PNG);

            bodySegmentService.updateBodySegmentWithNewPhoto(bodySegmentId, imageLink, imageType);

            // Возвращаем JSON вместо строки
            Map<String, String> response = new HashMap<>();
            response.put("imageLink", imageLink);

            return ResponseEntity.ok(response);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Collections.singletonMap("error", "File upload failed"));
        }
    }

    @CrossOrigin
    @PostMapping("/body-segment/description")
    public ResponseEntity<Void> saveDescriptionForBodySegment(@RequestBody AdminSaveDescriptionDto adminSaveDescriptionDto) {
        bodySegmentService.updateBodySegmentDescription(
                adminSaveDescriptionDto.getBodySegmentId(),
                adminSaveDescriptionDto.getDescription()
        );
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/body-segment/estimation")
    public ResponseEntity<Void> saveEstimationForBodySegment(@RequestBody AdminSaveEstimationDto adminSaveEstimationDto) {
        bodySegmentService.updateBodySegmentEstimation(
                adminSaveEstimationDto.getBodySegmentId(),
                adminSaveEstimationDto.getEstimation()
        );
        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @PostMapping("/review/results-item")
    public ResponseEntity<AdminReviewResultsItemDto> saveReviewResultsItem(@RequestBody AdminReviewResultsItemDto adminReviewResultsItemDto) {
        if (adminReviewResultsItemDto.getId() != null) {
            ReviewResultsItem updatedItem = reviewResultsItemService.update(adminReviewResultsItemDto);
            return ResponseEntity.ok(reviewResultsItemMapper.map(updatedItem));
        }

        // Если ID нет, создаём новый объект
        ReviewResultsItem reviewResultsItem = reviewResultsItemService.save(adminReviewResultsItemDto);
        return ResponseEntity.ok(reviewResultsItemMapper.map(reviewResultsItem));
    }

    @CrossOrigin
    @DeleteMapping("/review/results-item/{id}")
    public ResponseEntity<Void> deleteReviewResultsItem(@PathVariable Long id) {
        try {
            reviewResultsItemService.deleteReviewResultsItem(id);
            return ResponseEntity.noContent().build(); // 204 No Content (успешное удаление)
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }

}
