package co.fitreview.backend.repo;

import co.fitreview.backend.entity.review.BodySegment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BodySegmentRepo extends JpaRepository<BodySegment, Long> {
}
