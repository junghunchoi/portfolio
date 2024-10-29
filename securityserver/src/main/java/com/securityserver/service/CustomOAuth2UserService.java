package com.securityserver.service;

import com.securityserver.dto.MemberSecurityDTO;
import com.securityserver.entity.Member;
import com.securityserver.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private final MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oauth2User = super.loadUser(userRequest);

        // OAuth2 사용자 정보로 내부 사용자 정보 생성 또는 업데이트

        Member user = Member.builder()
                .id(123L)
                .build();

        memberRepository.save(user);
        return new MemberSecurityDTO(user, oauth2User.getAttributes());
    }
}
