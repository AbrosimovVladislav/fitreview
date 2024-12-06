package co.fitreview.backend.entity.survey;

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

    private String value;
    private LocalDateTime date;
    private String userId;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "question_id", nullable = false) // Внешний ключ
    private Question question;

}
