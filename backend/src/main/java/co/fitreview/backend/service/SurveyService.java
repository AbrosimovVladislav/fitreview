package co.fitreview.backend.service;

import co.fitreview.backend.dto.AnswerDto;
import co.fitreview.backend.entity.survey.Answer;
import co.fitreview.backend.entity.survey.Question;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.AnswerRepo;
import co.fitreview.backend.repo.QuestionRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SurveyService {

    private final QuestionRepo questionRepo;
    private final AnswerRepo answerRepo;

    public Answer getAnswerByUserIdAndQuestionId(Long userId, Long questionId) {
        Optional<Answer> answerOpt = answerRepo.findByUserIdAndQuestionId(userId, questionId);

        if (answerOpt.isEmpty()) {
            return null;
        }

        return answerOpt.get();
    }

    public Answer saveAnswer(AnswerDto answerDto, Long userId) {
        Answer finalAnswer = null;

        Optional<Answer> answerOpt = answerRepo.findByUserIdAndQuestionId(userId, answerDto.getQuestionId());

        if (answerOpt.isPresent()) {
            Answer existingAnswer = answerOpt.get();
            existingAnswer.setValue(answerDto.getAnswerValue());
            finalAnswer = answerRepo.save(existingAnswer);
        } else {
            finalAnswer = answerRepo.save(new Answer()
                    .setUserId(userId)
                    .setQuestion(questionRepo
                            .findById(answerDto.getQuestionId())
                            .orElseThrow(() -> new EntityNotFoundException("Question", "Question id: " + answerDto.getQuestionId(), "")))
                    .setValue(answerDto.getAnswerValue())
                    .setDate(LocalDateTime.now()));
        }

        return finalAnswer;
    }

    public Question getQuestionById(Long questionId) {
        Optional<Question> questionOpt = questionRepo.findById(questionId);

        if (questionOpt.isEmpty()) {
            throw new EntityNotFoundException("Question", "QuestionId: " + questionId, "");
        }

        return questionOpt.get();
    }

}
