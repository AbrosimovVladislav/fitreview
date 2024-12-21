package co.fitreview.backend.web;

import co.fitreview.backend.entity.*;
import co.fitreview.backend.repo.FRUserRepo;
import co.fitreview.backend.service.TrainingService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/training")
@RequiredArgsConstructor
public class TrainingApi {

    private final TrainingService trainingService;
    private final FRUserRepo frUserRepo;

    @GetMapping("/user")
    public List<Training> getTrainingsByUser(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return trainingService.findByUserId(user.getId());
    }

    @GetMapping("/public/exercises/{trainingId}")
    public List<Exercise> getExercisesByTrainingId (@PathVariable Long trainingId){
        return trainingService.getExerciseByTrainingId(trainingId);
    }

    @GetMapping("/public/{id}")
    public Training getTrainingById(@PathVariable Long id) {
        return trainingService.getTrainingById(id);
    }

    @GetMapping("/public/exercise/{id}")
    public Exercise getExerciseById(@PathVariable Long id) {
        return trainingService.getExerciseById(id);
    }

    @GetMapping("/public/exercises/{region}/{subcategory}")
    public List<Exercise> getExercisesByRegionAndSubcategory(@PathVariable Region region, @PathVariable Subcategory subcategory) {
        return trainingService.getExercisesByRegionAndSubcategory(region, subcategory);
    }

}
