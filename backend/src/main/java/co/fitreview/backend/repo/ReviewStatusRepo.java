package co.fitreview.backend.repo;

import co.fitreview.backend.entity.survey.ReviewStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewStatusRepo extends JpaRepository<ReviewStatus, Long> {

    Optional<ReviewStatus> findFirstByReviewIdOrderByDateDesc(Long userId);

}
