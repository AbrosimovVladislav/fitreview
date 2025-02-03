package co.fitreview.backend.web;

import co.fitreview.backend.dto.AdminShortReviewDto;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.survey.ReviewStatus;
import co.fitreview.backend.service.ReviewService;
import co.fitreview.backend.web.mapper.AdminApiMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("api/v1/admin/public")
@RequiredArgsConstructor
public class AdminApi {

    private final ReviewService reviewService;
    private final AdminApiMapper adminApiMapper;

    @CrossOrigin
    @GetMapping("/review")
    public List<AdminShortReviewDto> getAdminShortReviewDtos() {
        List<Review> reviews = reviewService.getAllReviews();

        return reviews.stream().map(review -> {
            //TODO здесь мы берем последний актуальный статус по юзеру а не по конкретному ревью
            //TODO возможно надо будет передлать в том числе и модель данных
            //TODO либо сделать метод который сможет определять какой статус к какому ревью относится
            ReviewStatus actualStatus = reviewService.getLastReviewStatusByUserId(review.getUserData().getFrUser().getId());
            return adminApiMapper.map(review, actualStatus.getValue());
        }).toList();
    }

}
