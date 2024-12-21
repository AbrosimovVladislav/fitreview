package co.fitreview.backend.web.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final FirebaseAuthFilter firebaseAuthFilter;
    private final SecurityProperties securityProperties;

    public SecurityConfig(FirebaseAuthFilter firebaseAuthFilter, SecurityProperties securityProperties) {
        this.firebaseAuthFilter = firebaseAuthFilter;
        this.securityProperties = securityProperties;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        List<String> allowedPaths =  securityProperties.getAllowedPaths().stream().map(path -> path + "/**").toList();

        http
                .csrf(AbstractHttpConfigurer::disable) // Отключаем CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(allowedPaths.toArray(new String[0])).permitAll() // Путь авторизации
                        .anyRequest().authenticated() // Все остальные запросы требуют аутентификации
                )
                .addFilterBefore(firebaseAuthFilter, UsernamePasswordAuthenticationFilter.class); // Добавляем фильтр перед стандартными

        return http.build();
    }
}
