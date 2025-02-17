package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.admin.AdminReviewResultsItemDto;
import co.fitreview.backend.entity.review.ReviewResultsItem;
import org.springframework.stereotype.Component;

@Component
public class ReviewResultsItemMapper {

    public AdminReviewResultsItemDto map(ReviewResultsItem reviewResultsItem) {
        return AdminReviewResultsItemDto.builder()
                .id(reviewResultsItem.getId())
                .reviewId(reviewResultsItem.getReview().getId())
                .title(reviewResultsItem.getTitle())
                .description(reviewResultsItem.getDescription())
                .estimation(reviewResultsItem.getEstimation())
                .iconType(reviewResultsItem.getIconType())
                .type(reviewResultsItem.getType())
                .build();
    }
}