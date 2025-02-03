package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.AdminShortReviewDto;
import co.fitreview.backend.entity.review.Review;
import org.springframework.stereotype.Component;

@Component
public class AdminApiMapper {

    public AdminShortReviewDto map(Review review, String actualStatus){

        return AdminShortReviewDto.builder()
                .id(String.valueOf(review.getId()))
                .name(review.getUserData().getFrUser().getName())
                .email(review.getUserData().getFrUser().getEmail())
                .status(actualStatus)
                .date(review.getDate())
                .build();
    }

}
