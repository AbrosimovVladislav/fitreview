package co.fitreview.backend.entity.review;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_data_id", referencedColumnName = "id")
    private UserData userData; // Ссылка на данные пользователя

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<BodySegment> bodySegments; // Сегменты тела

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Problem> problems; // Проблемы, выявленные в ревью

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<TrainingObjective> trainingObjectives; // Тренировочные цели

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<GeneralRecommendation> generalRecommendations; // Рекомендации

}
