package co.fitreview.backend.web.mapper;

import co.fitreview.backend.dto.ReviewDetailsDto;
import co.fitreview.backend.dto.UserDataDto;
import co.fitreview.backend.entity.review.BodySegment;
import co.fitreview.backend.entity.review.Review;
import org.springframework.stereotype.Component;

import java.util.Comparator;

@Component
public class ReviewMapper {

    public ReviewDetailsDto map(Review review) {

        Double weight = review.getAnswers().stream()
                .filter(answer -> "Weight".equals(answer.getQuestion().getTitle()))
                .map(answer -> Double.valueOf(answer.getValue().replaceAll("\"","")))
                .findFirst()
                .orElse(null);
        Integer age = review.getAnswers().stream()
                .filter(answer -> "Age".equals(answer.getQuestion().getTitle()))
                .map(answer -> Integer.valueOf(answer.getValue().replaceAll("\"","")))
                .findFirst()
                .orElse(null);;

        UserDataDto userDataDto = UserDataDto.builder()
                .weight(weight)
                .age(age)
                .fatIndex(Integer.valueOf(review.getFatIndex().replaceAll("\"", "")))
                .build();

        return ReviewDetailsDto.builder()
                .id(review.getId())
                .date(review.getDate())
                .estimation(review.getEstimation())
                .userData(userDataDto)
                .frUser(review.getFrUser())
                .bodySegments(review.getBodySegments().stream()
                        .sorted(Comparator.comparing(BodySegment::getId))
                        .toList())
                .problems(review.getProblems())
                .trainingObjectives(review.getTrainingObjectives())
                .generalRecommendations(review.getGeneralRecommendations())
                .build();
    }

}
