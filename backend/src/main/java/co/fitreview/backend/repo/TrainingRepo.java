package co.fitreview.backend.repo;

import co.fitreview.backend.entity.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainingRepo extends JpaRepository<Training, Long> {
}
