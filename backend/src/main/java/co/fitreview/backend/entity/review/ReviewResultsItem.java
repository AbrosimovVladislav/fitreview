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
public class ReviewResultsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 5000)
    private String title; // Название проблемы
    @Column(length = 15000)
    private String description; // Описание проблемы
    private int estimation; // Оценка проблемы
    private String iconType; // Тип иконки для отображения
    private String type; // Тип результата (Проблема, Тренировочная Цель, Общая рекомендация)

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id", nullable = false)
    private Review review; // Ссылка на ревью
}
