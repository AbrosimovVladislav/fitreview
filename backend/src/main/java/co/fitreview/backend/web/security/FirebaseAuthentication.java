package co.fitreview.backend.web.security;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class FirebaseAuthentication implements Authentication {
    private final String uid;
    private boolean authenticated = true;

    public FirebaseAuthentication(String uid) {
        this.uid = uid;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null; // Можно вернуть роли, если нужно
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getDetails() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return uid;
    }

    @Override
    public boolean isAuthenticated() {
        return authenticated;
    }

    @Override
    public void setAuthenticated(boolean authenticated) throws IllegalArgumentException {
        this.authenticated = authenticated;
    }

    @Override
    public String getName() {
        return uid;
    }
}
