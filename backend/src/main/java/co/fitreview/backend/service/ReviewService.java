package co.fitreview.backend.service;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.review.BodySegment;
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
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepo reviewRepo;
    private final ReviewStatusRepo reviewStatusRepo;
    private final BodySegmentService bodySegmentService;

    public Review createNewReview(FRUser user) {
        List<BodySegment> emptyBodySegments = bodySegmentService.getEmptyBodySegments();

        // Установить связь между каждым BodySegment и создаваемым ревью
        Review newReview = new Review()
                .setDate(LocalDateTime.now())
                .setFrUser(user);

        emptyBodySegments.forEach(segment -> segment.setReview(newReview));

        return reviewRepo.save(newReview.setBodySegments(emptyBodySegments));
    }

    public ReviewStatus createReviewStatus(Long reviewId, String status) {
        Review review = reviewRepo.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("Review", String.valueOf(reviewId), "Not found review with id: "));
        return reviewStatusRepo.save(new ReviewStatus()
                .setReview(review)
                .setValue(status)
                .setDate(LocalDateTime.now()));
    }

    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    public ReviewStatus getLastReviewStatusById(Long reviewId) {
        ReviewStatus reviewStatus = reviewStatusRepo.findFirstByReviewIdOrderByDateDesc(reviewId)
                .orElse(null);
        log.info("ReviewId - " + reviewId + " / Status - " + reviewStatus.getValue());
        return reviewStatus;
    }

    @Transactional(readOnly = true)
    public Optional<Review> getLastReviewByUserId(Long userId) {
        return reviewRepo.findFirstByFrUserIdOrderByDateDesc(userId);
    }

    public Optional<Review> getReviewById(Long reviewId) {
        return reviewRepo.findById(reviewId);
    }

    @Transactional
    public Review updateReviewEstimation(Long reviewId, Integer estimation) {
        Review review = reviewRepo.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("Review", String.valueOf(reviewId), "Review not found"));

        review.setEstimation(estimation);
        return reviewRepo.save(review);
    }

    @Transactional
    public Review updateReviewFatIndex(Long reviewId, String fatIndex) {
        Review review = reviewRepo.findById(reviewId)
                .orElseThrow(() -> new EntityNotFoundException("Review", String.valueOf(reviewId), "Review not found"));

        review.setFatIndex(fatIndex);
        return reviewRepo.save(review);
    }
}
