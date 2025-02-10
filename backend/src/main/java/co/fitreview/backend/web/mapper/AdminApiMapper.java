package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.admin.AdminReviewAnswerDto;
import co.fitreview.backend.dto.admin.AdminReviewDetailsDto;
import co.fitreview.backend.dto.admin.AdminShortReviewDto;
import co.fitreview.backend.entity.review.Review;
import org.springframework.stereotype.Component;

import java.util.List;

import static co.fitreview.backend.entity.QuestionType.PHOTO;

@Component
public class AdminApiMapper {

    public AdminShortReviewDto map(Review review, String actualStatus) {
        return AdminShortReviewDto.builder()
                .id(String.valueOf(review.getId()))
                .name(review.getFrUser().getName())
                .email(review.getFrUser().getEmail())
                .status(actualStatus)
                .date(review.getDate())
                .build();
    }

    public AdminReviewDetailsDto map(Review review) {
        List<AdminReviewAnswerDto> answers = review.getAnswers().stream()
                .filter(answer -> !PHOTO.equals(answer.getQuestion().getType()))
                .map(answer -> AdminReviewAnswerDto.builder()
                        .question(answer.getQuestion().getTitle())
                        .answer(answer.getValue())
                        .build())
                .toList();
        List<AdminReviewAnswerDto> photos = review.getAnswers().stream()
                .filter(answer -> PHOTO.equals(answer.getQuestion().getType()))
                .map(answer -> AdminReviewAnswerDto.builder()
                        .question(answer.getQuestion().getTitle())
                        .answer(answer.getValue().replaceAll("\"",""))
                        .build())
                .toList();

        return AdminReviewDetailsDto.builder()
                .userName(review.getFrUser().getName())
                .userEmail(review.getFrUser().getEmail())
                .creationDate(review.getDate())
                .answers(answers)
                .photos(photos)
                .build();
    }

}
