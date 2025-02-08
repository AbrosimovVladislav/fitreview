package co.fitreview.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NewStatusDto {
    private Long reviewId;
    private String status;
}
