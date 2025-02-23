package co.fitreview.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class Passcode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    @ManyToOne
    @JoinColumn(name = "fr_user_id")
    private FRUser frUser; // Привязка к пользователю

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime activatedAt;

    private boolean isActive = true;
}
