package co.fitreview.backend.repo;

import co.fitreview.backend.entity.review.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {
    //TODO принимать id конкретного ревью и у него получать последний статус
    Optional<Review> findFirstByFrUserIdOrderByDateDesc(Long userId);

}
