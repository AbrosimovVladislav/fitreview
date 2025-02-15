package co.fitreview.backend.dto;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.review.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
public class ReviewDetailsDto {
    private Long id;
    private LocalDateTime date;
    private Integer estimation;
    private UserDataDto userData;
    private FRUser frUser;
    private List<BodySegment> bodySegments;
    private List<ReviewResultsItem> reviewResultsItems;

}
