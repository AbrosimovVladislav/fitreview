package co.fitreview.backend.web;

import co.fitreview.backend.dto.AnswerDto;
import co.fitreview.backend.entity.survey.Answer;
import co.fitreview.backend.entity.survey.Question;
import co.fitreview.backend.service.SurveyService;
import co.fitreview.backend.web.mapper.AnswerMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/survey")
@RequiredArgsConstructor
public class SurveyApi {

    private final SurveyService surveyService;
    private final AnswerMapper answerMapper;

    @GetMapping("/answer/{userId}/{questionId}")
    public AnswerDto getAnswerByUserIdAndQuestionId(@PathVariable String userId, @PathVariable Long questionId) {
        Answer answer = surveyService.getAnswerByUserIdAndQuestionId(userId, questionId);
        return answer == null ? null : answerMapper.toDto(answer);
    }

    @PostMapping("/answer")
    public void saveAnswer(@RequestBody AnswerDto request) {
        surveyService.saveAnswer(request);
    }

    @GetMapping("/question/{questionId}")
    public Question getQuestionById(@PathVariable Long questionId) {
        return surveyService.getQuestionById(questionId);
    }

}
