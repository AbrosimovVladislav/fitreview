package co.fitreview.backend.entity.review;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // Название проблемы
    private String description; // Описание проблемы
    private int estimation; // Оценка проблемы
    private String iconType; // Тип иконки для отображения

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "review_id", nullable = false)
    private Review review; // Ссылка на ревью
}
