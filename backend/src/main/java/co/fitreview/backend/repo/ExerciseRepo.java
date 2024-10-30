package co.fitreview.backend.repo;

import co.fitreview.backend.entity.Exercise;
import co.fitreview.backend.entity.Region;
import co.fitreview.backend.entity.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExerciseRepo extends JpaRepository<Exercise, Long> {

    List<Exercise> findByRegionAndSubcategory(Region region, Subcategory subcategory);

}
