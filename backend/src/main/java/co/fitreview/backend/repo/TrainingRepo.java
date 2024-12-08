package co.fitreview.backend.repo;

import co.fitreview.backend.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepo extends JpaRepository<Training, Long> {

    // Поиск тренировок по списку пользователей через ID
    @Query("SELECT t FROM Training t JOIN t.users u WHERE u.id = :userId")
    List<Training> findByUserId(@Param("userId") Long userId);

}
