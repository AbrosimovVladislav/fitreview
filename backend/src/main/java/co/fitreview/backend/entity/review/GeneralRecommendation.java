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
public class GeneralRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // Название рекомендации
    private String description; // Описание рекомендации
    private String iconType; // Тип иконки для отображения

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "review_id", nullable = false)
    private Review review; // Ссылка на ревью
}
