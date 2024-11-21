package co.fitreview.backend.web;

import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
