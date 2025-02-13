package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminSaveEstimationDto {
    private Long bodySegmentId;
    private Long reviewId;
    private Integer estimation;
}
