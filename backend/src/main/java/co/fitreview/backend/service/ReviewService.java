package co.fitreview.backend.service;

import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.ReviewRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepo reviewRepo;

    @Transactional(readOnly = true)
    public Review getLastReviewByUserId(Long userId) {
        Optional<Review> reviewOpt = reviewRepo.findFirstByUserDataIdOrderByDateDesc(userId);

        if (reviewOpt.isEmpty()) {
            throw new EntityNotFoundException("Review", "Userid: " + userId, "");
        }

        return reviewOpt.get();
    }

}
