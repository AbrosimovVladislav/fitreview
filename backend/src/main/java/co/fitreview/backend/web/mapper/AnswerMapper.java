package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.AnswerDto;
import co.fitreview.backend.entity.survey.Answer;
import org.springframework.stereotype.Component;

@Component
public class AnswerMapper {

    public AnswerDto toDto(Answer answer) {
        return AnswerDto.builder()
                .userId(answer.getUserId())
                .questionId(answer.getQuestion().getId())
                .answerValue(answer.getValue())
                .build();
    }

}
