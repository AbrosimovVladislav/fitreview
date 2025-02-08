package co.fitreview.backend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDataDto {
    private Double weight;
    private Integer fatIndex;
    private Integer age;
}
