package co.fitreview.backend.entity.review;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.survey.Answer;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Review {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    private LocalDate date; // Дата проведения ревью

    private Integer estimation;

    private String fatIndex;

    @ManyToOne
    @JoinColumn(name = "fr_user_id", nullable = false) // Привязываем к пользователю
    private FRUser frUser;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Answer> answers; // Все ответы, связанные с ревью

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<BodySegment> bodySegments; // Сегменты тела

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Problem> problems; // Проблемы, выявленные в ревью

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<TrainingObjective> trainingObjectives; // Тренировочные цели

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<GeneralRecommendation> generalRecommendations; // Рекомендации

}
