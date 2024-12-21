package co.fitreview.backend.web;

import co.fitreview.backend.dto.AnswerDto;
import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.survey.Answer;
import co.fitreview.backend.entity.survey.Question;
import co.fitreview.backend.repo.FRUserRepo;
import co.fitreview.backend.service.SurveyService;
import co.fitreview.backend.web.mapper.AnswerMapper;
import jakarta.servlet.http.HttpServletRequest;
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

    private final FRUserRepo frUserRepo;

    @GetMapping("/answer/{questionId}")
    public AnswerDto getAnswerByQuestionIdForUser(@PathVariable Long questionId, HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Answer answer = surveyService.getAnswerByUserIdAndQuestionId(user.getId(), questionId);
        return answer == null ? null : answerMapper.toDto(answer);
    }

    @PostMapping("/answer")
    public void saveAnswer(@RequestBody AnswerDto requestDto, HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        surveyService.saveAnswer(requestDto, user.getId());
    }

    @GetMapping("/public/question/{questionId}")
    public Question getQuestionById(@PathVariable Long questionId) {
        return surveyService.getQuestionById(questionId);
    }

}
