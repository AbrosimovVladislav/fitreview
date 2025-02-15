package co.fitreview.backend.repo;

import co.fitreview.backend.entity.review.ReviewResultsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewResultsItemRepo extends JpaRepository<ReviewResultsItem, Long> {
}
