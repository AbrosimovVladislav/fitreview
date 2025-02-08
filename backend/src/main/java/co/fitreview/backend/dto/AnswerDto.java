package co.fitreview.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AnswerDto {
    private Long reviewId;
    private Long questionId;
    private String answerValue;
}
