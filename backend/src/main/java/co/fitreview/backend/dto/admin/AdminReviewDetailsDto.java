package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
public class AdminReviewDetailsDto {

    private String userName;
    private String userEmail;
    private LocalDateTime creationDate;
    private List<AdminReviewAnswerDto> answers;
    private List<AdminReviewAnswerDto> photos;
    private List<AdminBodySegmentDto> bodySegments;

}
