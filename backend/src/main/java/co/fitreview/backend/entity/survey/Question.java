package co.fitreview.backend.entity.survey;

import co.fitreview.backend.entity.QuestionType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    private String title; // заголовок, например фото
    private String value; // сам вопрос
    private String description; // пояснение вопроса, если нужно
    private String placeholder; // посяснение вопрос в инпуте, если нужно
    private String imageExample;

    // Связь с вариантами ответа
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private List<AnswerOption> answerOptions;

    // Связь с ответами
    @JsonIgnore // Скрыть список ответов в JSON
    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answers;

}
