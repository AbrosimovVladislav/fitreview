package co.fitreview.backend.entity.survey;

import co.fitreview.backend.entity.review.Review;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class ReviewStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String value;
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;
}
