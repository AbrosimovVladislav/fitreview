package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.admin.*;
import co.fitreview.backend.entity.review.BodySegment;
import co.fitreview.backend.entity.review.Review;
import co.fitreview.backend.entity.review.ReviewResultsItem;
import co.fitreview.backend.entity.survey.ReviewStatus;
import org.springframework.stereotype.Component;

import java.util.Comparator;
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

    public AdminReviewDetailsDto mapDetails(Review review, ReviewStatus actualStatus) {
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
                        .answer(answer.getValue().replaceAll("\"", ""))
                        .build())
                .toList();

        List<AdminBodySegmentDto> bodySegments = review.getBodySegments().stream()
                .sorted(Comparator.comparing(BodySegment::getId))
                .map(segment -> AdminBodySegmentDto.builder()
                        .id(segment.getId())
                        .name(segment.getName())
                        .title(segment.getTitle())
                        .segmentGroup(segment.getSegmentGroup())
                        .userImage(segment.getUserImage())
                        .diagramImage(segment.getDiagramImage())
                        .description(segment.getDescription())
                        .estimation(segment.getEstimation())
                        .build()).toList();

        List<AdminReviewResultsItemDto> reviewResultsItemDtos = review.getReviewResultsItems().stream()
                .sorted(Comparator.comparing(ReviewResultsItem::getId))
                .map(reviewResultsItem -> AdminReviewResultsItemDto.builder()
                        .id(reviewResultsItem.getId())
                        .reviewId(reviewResultsItem.getReview().getId())
                        .title(reviewResultsItem.getTitle())
                        .description(reviewResultsItem.getDescription())
                        .estimation(reviewResultsItem.getEstimation())
                        .iconType(reviewResultsItem.getIconType())
                        .type(reviewResultsItem.getType())
                        .build()).toList();

        return AdminReviewDetailsDto.builder()
                .userName(review.getFrUser().getName())
                .userEmail(review.getFrUser().getEmail())
                .status(actualStatus.getValue())
                .creationDate(review.getDate())
                .estimation(review.getEstimation())
                .fatIndex(review.getFatIndex())
                .answers(answers)
                .photos(photos)
                .bodySegments(bodySegments)
                .reviewResultsItems(reviewResultsItemDtos)
                .build();
    }

}
