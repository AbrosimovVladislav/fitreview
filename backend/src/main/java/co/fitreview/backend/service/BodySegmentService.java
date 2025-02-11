package co.fitreview.backend.service;

import co.fitreview.backend.entity.review.BodySegment;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class BodySegmentService {

    public List<BodySegment> getEmptyBodySegments() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<BodySegment>> typeReference = new TypeReference<>() {};
        InputStream inputStream = getClass().getResourceAsStream("/empty-body-segments.json");

        try {
            List<BodySegment> bodySegments = mapper.readValue(inputStream, typeReference);

            // Установим пустые значения для полей, которые не указаны в JSON
            bodySegments.forEach(segment -> {
                segment.setEstimation(null);
                segment.setUserImage(null);
                segment.setDiagramImage(null);
                segment.setReview(null); // Зависимость от ревью установим позже
                segment.setDescription(null);
            });

            return bodySegments;

        } catch (IOException e) {
            throw new RuntimeException("Failed to load empty body segments from file", e);
        }
    }
}
