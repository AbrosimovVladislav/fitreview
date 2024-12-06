package co.fitreview.backend.repo;

import co.fitreview.backend.entity.survey.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswerRepo extends JpaRepository<Answer, Long> {
    Optional<Answer> findByUserIdAndQuestionId(String userId, Long questionId);
}
