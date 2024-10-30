package co.fitreview.backend.service;

import co.fitreview.backend.entity.Exercise;
import co.fitreview.backend.entity.Region;
import co.fitreview.backend.entity.Subcategory;
import co.fitreview.backend.entity.Training;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.ExerciseRepo;
import co.fitreview.backend.repo.TrainingRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TrainingService {

    private final ExerciseRepo exerciseRepo;
    private final TrainingRepo trainingRepo;

    public Training getTrainingById(Long id) {
        Optional<Training> training = trainingRepo.findById(id);

        if (training.isEmpty()) {
            log.error("Training with id <{}> not found", id);
            throw new EntityNotFoundException("Training", id.toString(), "");
        }

        return training.get();
    }

    public Exercise getExerciseById(Long id) {
        Optional<Exercise> exercise = exerciseRepo.findById(id);

        if (exercise.isEmpty()) {
            log.error("Exercise with id <{}> not found", id);
            throw new EntityNotFoundException("Exercise", id.toString(), "");
        }

        return exercise.get();
    }

    public List<Exercise> getExercisesByRegionAndSubcategory(Region region, Subcategory subcategory) {
        return exerciseRepo.findByRegionAndSubcategory(region,subcategory);
    }
}
