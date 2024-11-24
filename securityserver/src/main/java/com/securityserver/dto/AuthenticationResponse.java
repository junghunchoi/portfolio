package com.securityserver.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class AuthenticationResponse {
    private final String accessToken;
    private final String refreshToken;
    private final String username;
    private final List<String> authorities;
    private final List<String> roles;
    private final long expiresAt;
}
