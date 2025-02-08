package co.fitreview.backend.entity.survey;

import co.fitreview.backend.entity.review.Review;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10000)
    private String value;
    private LocalDateTime date;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "review_id", nullable = false) // Привязка к конкретному ревью
    private Review review;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "question_id", nullable = false) // Внешний ключ
    private Question question;

}
