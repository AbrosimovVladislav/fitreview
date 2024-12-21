package co.fitreview.backend.web;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.repo.FRUserRepo;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthApi {

    private final FRUserRepo frUserRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthDto request) {
        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(request.getIdToken());
            String uid = decodedToken.getUid();
            String email = decodedToken.getEmail();
            String name = decodedToken.getName();

            // Проверяем, существует ли пользователь
            if (frUserRepository.findByFirebaseId(uid).isPresent()) {
                return ResponseEntity.status(400).body("User already exists");
            }

            // Создаём нового пользователя
            FRUser newUser = new FRUser()
                    .setFirebaseId(uid)
                    .setEmail(email)
                    .setName(name);

            frUserRepository.save(newUser);

            return ResponseEntity.ok("User registered successfully");
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(401).body("Invalid token");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthDto request) {
        try {
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(request.getIdToken());
            String uid = decodedToken.getUid();

            // Проверяем, существует ли пользователь
            FRUser user = frUserRepository.findByFirebaseId(uid)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            return ResponseEntity.ok(user);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(401).body("Invalid token");
        }
    }

    @Data
    private static class AuthDto {
        private String idToken;
    }

}
