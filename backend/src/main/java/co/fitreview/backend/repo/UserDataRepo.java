package co.fitreview.backend.repo;

import co.fitreview.backend.entity.review.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDataRepo extends JpaRepository<UserData, Long> {

    Optional<UserData> findByFrUserId(Long frUserId);

}
