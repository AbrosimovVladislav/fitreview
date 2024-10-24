package co.fitreview.backend.service;

import co.fitreview.backend.entity.Exercise;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.ExerciseRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TrainingService {

    private final ExerciseRepo exerciseRepo;

    public Exercise getExerciseById(Long id) {
        Optional<Exercise> exercise = exerciseRepo.findById(id);

        if (exercise.isEmpty()) {
            log.error("Exercise with id <{}> not found", id);
            throw new EntityNotFoundException("Exercise", id.toString(), "");
        }

        return exercise.get();
    }
}
