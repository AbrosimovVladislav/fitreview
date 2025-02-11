package co.fitreview.backend.dto.admin;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AdminBodySegmentDto {

    private Long id;
    private String name; // Короткое обозначение (например, "FrontView-L1")
    private String title; // Полное описание сегмента (например, "Upper Body Right")
    private String segmentGroup; // Группа (например, "FrontView", "BackView")
    private Integer estimation;
    private String userImage; // URL изображения пользователя
    private String diagramImage; // URL изображения диаграммы
    private String description;

}


