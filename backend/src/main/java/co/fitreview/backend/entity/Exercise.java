package co.fitreview.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.Type;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Exercise {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String russianTitle;

    private String thumbnail;
    private String shortThumbnail;

    private String youtubeVideoId;

    @Enumerated(EnumType.STRING)
    private Level level;

    @Enumerated(EnumType.STRING)
    private Complexity complexity;

    private Integer time;

    @Enumerated(EnumType.STRING)
    private Region region;

    @Enumerated(EnumType.STRING)
    private Subcategory subcategory;

    @Type(JsonBinaryType.class)
    @Column(columnDefinition = "jsonb")
    private List<String> instructions;

    private String description;

    @JsonIgnore
    @ManyToMany(mappedBy = "exercises", fetch = FetchType.LAZY)
    private List<Training> trainings = new ArrayList<>();



}
