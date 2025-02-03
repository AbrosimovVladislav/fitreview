package co.fitreview.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class AdminShortReviewDto {

    private String id;
    private String name;
    private String email;
    private String status;
    private LocalDate date;

}