package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminSaveImageDto {
    private String imageBodySegment;
    private String imageBase64;
    private String imageType;
    private Long bodySegmentId;
}
