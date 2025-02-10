package co.fitreview.backend.web;

import co.fitreview.backend.dto.admin.AdminReviewDetailsDto;
import co.fitreview.backend.dto.admin.AdminShortReviewDto;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.service.ReviewService;
import co.fitreview.backend.web.mapper.AdminApiMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/admin/public")
@RequiredArgsConstructor
public class AdminApi {

    private final ReviewService reviewService;
    private final AdminApiMapper adminApiMapper;

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
    public AdminReviewDetailsDto getReviewDetailsById(@PathVariable Long reviewId){
        return reviewService.getReviewById(reviewId)
                .map(adminApiMapper::map)
                .orElse(null);
    }



}
