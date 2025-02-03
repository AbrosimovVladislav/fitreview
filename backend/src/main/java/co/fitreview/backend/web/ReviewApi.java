package co.fitreview.backend.web;

import co.fitreview.backend.dto.NewStatusDto;
import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.repo.FRUserRepo;
import co.fitreview.backend.service.ReviewService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/review")
@RequiredArgsConstructor
public class ReviewApi {

    private final ReviewService reviewService;
    private final FRUserRepo frUserRepo;

    @GetMapping()
    public Review getLastReviewByUserid(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reviewService.getLastReviewByUserId(user.getId());
    }

    @GetMapping("/status")
    public ReviewStatus getLastReviewStatusByUserId(HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return reviewService.getLastReviewStatusByUserId(user.getId());
    }

    @PostMapping("/status")
    public void addNewReviewStatus(@RequestBody NewStatusDto statusDto, HttpServletRequest request) {
        String uid = (String) request.getAttribute("uid"); // Получаем UID из middleware
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));
        reviewService.createReviewStatus(user.getId(), statusDto.getStatus());
    }

}
