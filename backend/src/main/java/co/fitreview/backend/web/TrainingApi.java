package co.fitreview.backend.web;

import co.fitreview.backend.entity.Exercise;
import co.fitreview.backend.service.TrainingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/training")
@RequiredArgsConstructor
public class TrainingApi {

    private final TrainingService trainingService;

    @GetMapping("/exercise/{id}")
    public Exercise getExerciseById(@PathVariable Long id) {
        return trainingService.getExerciseById(id);
    }

}
