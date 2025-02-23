package co.fitreview.backend.web;

import co.fitreview.backend.entity.FRUser;
import co.fitreview.backend.entity.Passcode;
import co.fitreview.backend.repo.FRUserRepo;
import co.fitreview.backend.service.PasscodeService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/passcode")
@RequiredArgsConstructor
public class PasscodeApi {

    private final PasscodeService passcodeService;
    private final FRUserRepo frUserRepo;

    @PostMapping("/verify")
    public String verifyPasscode(@RequestBody Map<String,String> request, HttpServletRequest httpRequest) {
        String passcode = request.get("passcode");
        String uid = (String) httpRequest.getAttribute("uid");
        FRUser user = frUserRepo.findByFirebaseId(uid)
                .orElseThrow(() -> new RuntimeException("User not found"));

        passcodeService.validatePasscode(passcode, user);
        return "Passcode successfully activated";
    }

    @PostMapping("/public/generate")
    public List<Passcode> generatePasscodes() {
        return passcodeService.generatePasscodes(10);
    }

    @GetMapping("/public/get-active")
    public Passcode getActivePasscode() {
        return passcodeService.getActivePasscode();
    }
}
