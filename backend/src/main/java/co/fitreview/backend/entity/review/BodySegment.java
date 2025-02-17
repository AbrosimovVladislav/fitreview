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
public class BodySegment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // Короткое обозначение (например, "FrontView-L1")
    private String title; // Полное описание сегмента (например, "Upper Body Right")
    private String segmentGroup; // Группа (например, "FrontView", "BackView")
    private Integer estimation;
    private String userImage; // URL изображения пользователя
    private String diagramImage; // URL изображения диаграммы
    @Column(length = 10000)
    private String description;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "review_id", nullable = false)
    private Review review; // Ссылка на ревью
}
