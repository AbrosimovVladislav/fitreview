package co.fitreview.backend.service;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.Passcode;
import co.fitreview.backend.repo.PasscodeRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
@RequiredArgsConstructor
public class PasscodeService {

    private final PasscodeRepo passcodeRepo;
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    private static final int CODE_LENGTH = 12;
    private static final Random RANDOM = new SecureRandom();

    @Transactional
    public boolean validatePasscode(String code, FRUser user) {
        Passcode passcode = passcodeRepo.findByCodeAndIsActiveTrue(code)
                .orElseThrow(() -> new RuntimeException("Invalid passcode"));

        passcode.setFrUser(user);
        passcode.setActivatedAt(LocalDateTime.now());
        passcode.setActive(false); // Деактивируем код после использования
        passcodeRepo.save(passcode);

        return true;
    }

    public static String generateRandomCode() {
        return IntStream.range(0, CODE_LENGTH)
                .mapToObj(i -> String.valueOf(CHARACTERS.charAt(RANDOM.nextInt(CHARACTERS.length()))))
                .collect(Collectors.joining());
    }

    @Transactional
    public List<Passcode> generatePasscodes(int count) {
        List<Passcode> passcodes = IntStream.range(0, count)
                .mapToObj(i -> new Passcode().setCode(generateRandomCode()).setActive(true))
                .collect(Collectors.toList());
        return passcodeRepo.saveAll(passcodes);
    }

    public Passcode getActivePasscode() {
        return passcodeRepo.findFirstByIsActiveTrue()
                .orElseThrow(() -> new RuntimeException("No available passcodes"));
    }
}
