package co.fitreview.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserIdAndNewStatusDto {

    private String userId; // ID пользователя
    private String status; // Новый статус
}
