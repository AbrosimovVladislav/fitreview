package co.fitreview.backend.service;

import co.fitreview.backend.entity.review.BodySegment;
import co.fitreview.backend.exception.EntityNotFoundException;
import co.fitreview.backend.repo.BodySegmentRepo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BodySegmentService {

    private final BodySegmentRepo bodySegmentRepository;

    @Transactional
    public BodySegment updateBodySegmentWithNewPhoto(Long bodySegmentId, String imageLink, String imageType) {
        BodySegment bodySegment = bodySegmentRepository.findById(bodySegmentId)
                .orElseThrow(() -> new EntityNotFoundException("BodySegment", "No segment with such id", String.valueOf(bodySegmentId)));

        switch (imageType) {
            case "userImage" -> bodySegment.setUserImage(imageLink);
            case "diagramImage" -> bodySegment.setDiagramImage(imageLink);
            default -> throw new IllegalArgumentException("Invalid image type: " + imageType);
        }

        return bodySegmentRepository.save(bodySegment);
    }

    public List<BodySegment> getEmptyBodySegments() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<BodySegment>> typeReference = new TypeReference<>() {
        };
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

    @Transactional
    public void updateBodySegmentDescription(Long bodySegmentId, String description) {
        BodySegment bodySegment = bodySegmentRepository.findById(bodySegmentId)
                .orElseThrow(() -> new EntityNotFoundException("BodySegment", String.valueOf(bodySegmentId), "BodySegment with such id not found"));

        bodySegment.setDescription(description);
        bodySegmentRepository.save(bodySegment);
    }

    @Transactional
    public void updateBodySegmentEstimation(Long bodySegmentId, Integer estimation) {
        BodySegment bodySegment = bodySegmentRepository.findById(bodySegmentId)
                .orElseThrow(() -> new EntityNotFoundException("BodySegment", String.valueOf(bodySegmentId), "BodySegment with such id not found"));

        bodySegment.setEstimation(estimation);
        bodySegmentRepository.save(bodySegment);
    }
}
