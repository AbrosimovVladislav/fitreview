package co.fitreview.backend.repo;

import co.fitreview.backend.entity.FRUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FRUserRepo extends JpaRepository<FRUser, Long> {
    Optional<FRUser> findByEmail(String email);
    Optional<FRUser> findByFirebaseId(String uid);
}
