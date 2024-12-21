package co.fitreview.backend.entity.review;


import co.fitreview.backend.entity.FRUser;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@Accessors(chain = true)
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;   // Имя пользователя
    private int estimation;    // Оценка состояния
    private double weight;     // Вес пользователя
    private double fatIndex;   // Индекс жира
    private int age;           // Возраст пользователя

    @OneToOne
    @JoinColumn(name = "fr_user_id", unique = true) // Связываем с FRUser
    private FRUser frUser;
}
