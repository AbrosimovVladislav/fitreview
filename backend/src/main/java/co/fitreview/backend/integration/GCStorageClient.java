package co.fitreview.backend.integration;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

import java.net.URI;

@Slf4j
@Service
@RequiredArgsConstructor
public class GCStorageClient {

    @Value("${gcp.storage.bucket-name}")
    private String bucketName;
    @Value("${gcp.storage.basic-url}")
    private String storageUrl;

    private final Storage storage;

    @SneakyThrows
    public String uploadImage(String imageUrl, String imageName, MediaType mediaType) {
        //if image exists in storage, return existing one
        String googleImageUrl = getImageUrlIfExists(imageName);
        if (googleImageUrl != null) {
            log.info("Image: <{}> already exists. Returning of the image", googleImageUrl);
            return googleImageUrl;
        }

        //if not, save image and return new url
        byte[] imageBytes = IOUtils.toByteArray(URI.create(imageUrl));
        return uploadImage(imageBytes, imageName, mediaType);
    }

    @SneakyThrows
    public String uploadImage(byte[] imageByteArray, String imageName, MediaType mediaType) {
        BlobId blobId = BlobId.of(bucketName, imageName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType(mediaType.toString()).build();
        storage.create(blobInfo, imageByteArray);
        log.info("Image: <{}> successfully stored in GC Storage", imageName);
        return storageUrl + bucketName + "/" + imageName;
    }

    private String getImageUrlIfExists(String imageName) {
        Blob blob = storage.get(bucketName, imageName);
        if (blob != null) {
            return storageUrl + bucketName + "/" + imageName;
        } else {
            return null;
        }
    }

}
