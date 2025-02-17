package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminSaveDescriptionDto {
    private Long bodySegmentId;
    private Long reviewId;
    private String description;
}
