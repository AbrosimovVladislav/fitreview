package co.fitreview.backend.integration;

import com.google.auth.oauth2.ServiceAccountCredentials;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class GCPConfig {

  @Value("${gcp.storage.client-email}")
  private String clientEmail;

  @Value("${gcp.storage.private-key-id}")
  private String privateKeyId;

  @Value("${gcp.storage.private-key}")
  private String privateKey;

  @Value("${gcp.storage.client-id}")
  private String clientId;

  @Value("${gcp.storage.project-id}")
  private String projectId;

  @Bean
  @Primary
  @SneakyThrows
  public Storage storage() {

    String preparedPrivateKey = privateKey
        .replace("\\\\n", "\n")
        .replace("\\n", "\n");

    ServiceAccountCredentials credentials = ServiceAccountCredentials.fromPkcs8(
        clientId,
        clientEmail,
        preparedPrivateKey,
        privateKeyId,
        null  /// список областей действия, если есть
    );

    return StorageOptions.newBuilder()
        .setProjectId(projectId)
        .setCredentials(credentials)
        .build()
        .getService();
  }

}
