package co.fitreview.backend.repo;

import co.fitreview.backend.entity.Passcode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PasscodeRepo extends JpaRepository<Passcode, Long> {
    Optional<Passcode> findByCodeAndIsActiveTrue(String code);
    Optional<Passcode> findFirstByIsActiveTrue();
}
