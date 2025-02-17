package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class AdminShortReviewDto {

    private String id;
    private String name;
    private String email;
    private String status;
    private LocalDateTime date;

}