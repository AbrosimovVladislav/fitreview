package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminReviewResultsItemDto {
    private Long id;
    private Long reviewId;
    private String title;
    private String description;
    private int estimation;
    private String iconType;
    //TODO сделать енам (problem, objective, recommendation)
    private String type; // Тип результата (problem, objective, recommendation)
}
