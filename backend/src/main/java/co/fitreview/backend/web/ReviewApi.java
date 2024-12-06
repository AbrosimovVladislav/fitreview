package co.fitreview.backend.web;

import co.fitreview.backend.dto.UserIdAndNewStatusDto;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/review")
@RequiredArgsConstructor
public class ReviewApi {

    private final ReviewService reviewService;

    @GetMapping("/{userId}")
    public Review getLastReviewByUserid(@PathVariable Long userId) {
        return reviewService.getLastReviewByUserId(userId);
    }

    @GetMapping("/status/{userId}")
    public ReviewStatus getLastReviewStatusByUserId(@PathVariable String userId) {
        return reviewService.getReviewStatusByUserId(userId);
    }

    @PostMapping("/status")
    public void addNewReviewStatus(@RequestBody UserIdAndNewStatusDto request) {
        reviewService.createReviewStatus(request.getUserId(), request.getStatus());
    }

}
