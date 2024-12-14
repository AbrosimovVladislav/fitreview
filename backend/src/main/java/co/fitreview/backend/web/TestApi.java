package co.fitreview.backend.web;

import co.fitreview.backend.integration.GCStorageClient;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("test")
@RequiredArgsConstructor
public class TestApi {

    private final GCStorageClient gcStorageClient;

    @PostMapping("/uploadImage")
    public String testUploadImage(@RequestBody TestUploadImageDto request) {
        return gcStorageClient.uploadImage(request.getImageUrl(), request.getImageName(), MediaType.IMAGE_PNG);
    }

    @Data
    private static class TestUploadImageDto {
        private String imageUrl;
        private String imageName;
    }
}


