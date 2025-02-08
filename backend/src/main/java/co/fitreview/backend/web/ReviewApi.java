package co.fitreview.backend.web;

import co.fitreview.backend.dto.NewStatusDto;
import co.fitreview.backend.dto.ReviewDetailsDto;
import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.repo.FRUserRepo;
import co.fitreview.backend.service.ReviewService;
import co.fitreview.backend.web.mapper.ReviewMapper;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/review")
@RequiredArgsConstructor
public class ReviewApi {

    private final ReviewService reviewService;
    private final FRUserRepo frUserRepo;
    private final ReviewMapper reviewMapper;

    @PostMapping()
    public Long createNewReview(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid");
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reviewService.createNewReview(user).getId();
    }

    @PostMapping("/status")
    public void addNewReviewStatus(@RequestBody NewStatusDto statusDto, HttpServletRequest request) {
        reviewService.createReviewStatus(statusDto.getReviewId(), statusDto.getStatus());
    }

    @GetMapping()
    public ReviewDetailsDto getLastReviewByUserId(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid");
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return reviewService.getLastReviewByUserId(user.getId())
                .map(reviewMapper::map)
                .orElse(null);
    }

    @GetMapping("/id")
    public String getLastReviewIdByUserId(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid");
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reviewService.getLastReviewByUserId(user.getId())
                .map(review -> String.valueOf(review.getId()))
                .orElse(null);
    }

    @GetMapping("/status/{reviewId}")
    public ReviewStatus getReviewStatusById(@PathVariable Long reviewId, HttpServletRequest request) {
        return reviewService.getLastReviewStatusById(reviewId);
    }


}
