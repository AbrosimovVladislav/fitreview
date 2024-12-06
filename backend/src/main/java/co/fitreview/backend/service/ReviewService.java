package co.fitreview.backend.service;

import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.ReviewRepo;
import co.fitreview.backend.repo.ReviewStatusRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepo reviewRepo;
    private final ReviewStatusRepo reviewStatusRepo;

    public ReviewStatus createReviewStatus(String userId, String status) {
        return reviewStatusRepo.save(new ReviewStatus()
                .setUserId(userId)
                .setValue(status)
                .setDate(LocalDateTime.now()));
    }

    public ReviewStatus getReviewStatusByUserId(String userId) {
        ReviewStatus actualStatus = null;
        Optional<ReviewStatus> reviewStatusOpt = reviewStatusRepo.findFirstByUserIdOrderByDateDesc(userId);

        if (reviewStatusOpt.isEmpty()) {
            actualStatus = createReviewStatus(userId, "WelcomeScreen");
        } else {
            actualStatus = reviewStatusOpt.get();
        }

        return actualStatus;
    }

    @Transactional(readOnly = true)
    public Review getLastReviewByUserId(Long userId) {
        Optional<Review> reviewOpt = reviewRepo.findFirstByUserDataIdOrderByDateDesc(userId);

        if (reviewOpt.isEmpty()) {
            throw new EntityNotFoundException("Review", "Userid: " + userId, "");
        }

        return reviewOpt.get();
    }

}
