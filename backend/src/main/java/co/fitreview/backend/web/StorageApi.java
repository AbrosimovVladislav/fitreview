package co.fitreview.backend.web;

import co.fitreview.backend.integration.GCStorageClient;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/storage")
@RequiredArgsConstructor
public class StorageApi {

    private final GCStorageClient gcStorageClient;

    @PostMapping("/public/uploadImage")
    public String uploadImage(@RequestBody TestUploadImageDto request) {
        byte[] imageBytes = Base64.decodeBase64(request.getImageBase64());
        return gcStorageClient.uploadImage(imageBytes, request.getImageName(), MediaType.IMAGE_PNG);
    }

    @Data
    private static class TestUploadImageDto {
        private String imageName;
        private String imageBase64;
    }
}


