package co.fitreview.backend.service;

import co.fitreview.backend.dto.admin.AdminReviewResultsItemDto;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.review.ReviewResultsItem;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.ReviewRepo;
import co.fitreview.backend.repo.ReviewResultsItemRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReviewResultsItemService {

    private final ReviewResultsItemRepo reviewResultsItemRepo;
    private final ReviewRepo reviewRepo;

    public ReviewResultsItem save(AdminReviewResultsItemDto reviewResultsItemDto) {
        Review review = reviewRepo.findById(reviewResultsItemDto.getReviewId())
                .orElseThrow(() -> new EntityNotFoundException("Review", String.valueOf(reviewResultsItemDto.getReviewId()), "Review with such id not found"));

        ReviewResultsItem reviewResultsItem = new ReviewResultsItem()
                .setTitle(reviewResultsItemDto.getTitle())
                .setDescription(reviewResultsItemDto.getDescription())
                .setIconType(reviewResultsItemDto.getIconType())
                .setType(reviewResultsItemDto.getType())
                .setReview(review);

        if ("problem".equals(reviewResultsItemDto.getType())) {
            reviewResultsItem.setEstimation(reviewResultsItemDto.getEstimation());
        }

        return reviewResultsItemRepo.save(reviewResultsItem);
    }

    public ReviewResultsItem update(AdminReviewResultsItemDto adminReviewResultsItemDto) {
        ReviewResultsItem existingItem = reviewResultsItemRepo.findById(adminReviewResultsItemDto.getId())
                .orElseThrow(() -> new EntityNotFoundException("ReviewResultsItem",
                        String.valueOf(adminReviewResultsItemDto.getId()), "ReviewResultsItem with such id not found"));

        existingItem.setTitle(adminReviewResultsItemDto.getTitle());
        existingItem.setDescription(adminReviewResultsItemDto.getDescription());
        existingItem.setIconType(adminReviewResultsItemDto.getIconType());
        existingItem.setType(adminReviewResultsItemDto.getType());

        if ("problem".equals(adminReviewResultsItemDto.getType())) {
            existingItem.setEstimation(adminReviewResultsItemDto.getEstimation());
        }

        return reviewResultsItemRepo.save(existingItem);
    }

    @Transactional
    public void deleteReviewResultsItem(Long id) {
        if (!reviewResultsItemRepo.existsById(id)) {
            throw new EntityNotFoundException("ReviewResultsItem", String.valueOf(id), "ReviewResultsItem not found");
        }
        reviewResultsItemRepo.deleteById(id);
    }

}
