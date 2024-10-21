# junghun's portfolio

## 🤔 프로젝트 소개

벡엔드 개발자에게 자바, 파이썬, 노드JS만 알면 충분할까요? 이런 고민을 해봤습니다. </br>
하지만 깊이 생각해보면, 아무리 훌륭한 데이터를 가공했어도 이를 사용자에게 효과적으로 전달하고 표현하지 못한다면 무용지물이 될 것입니다. </br>
마치 팥 없는 붕어빵이나 앙꼬 없는 찐빵처럼 말이죠. </br>
그래서 저는 한국에서 가장 널리 사용되는 <b>Spring</b>과 <b>Vue</b>를 활용하여 <b>RESTful</b> 아키텍처 기반으로 개발하는 것이 좋겠다고
결심했습니다. </br>

## 아래의 링크와 계정으로 확인해주세요 :)

⚠️ <b>주의: 비용 절감을 위해 t2.micro 인스턴스를 사용하였으므로, 속도가 다소 느릴 수 있습니다. </b>

## <a href="http://13.210.146.57:1542" target="_blank"> 포트폴리오 링크 <= </a>

사용자 아이디 : user

사용자 비밀번호 : a1234

사용자 아이디 : admin

사용자 비밀번호 : a1234


</br>
<h1>버전</h1>

<details>
<summary><b>Version 1</b></summary>
<div markdown="1">

게시판 서비스 구축 댓글, 페이징, 정렬, 로그인 등 게시판에 필요한 기능들을 마무리함.
</div>
</details>

<details>
<summary><b>Version 2</b></summary>
<div markdown="1">
<details>
<summary><b>2.0.0</b></summary>
<div markdown="1">
JDK 14 -> 17
SPRING BOOT 2.7.14 -> 
</div>
</details>
</div>
</details>
</br>

## <a href="https://documenter.getpostman.com/view/22369547/2sA3BoZWgk" target="_blank"> 📖 Api 문서</a>

- 포트폴리오의 postman 기반 api 문서

</br>

## ⭐ 주요 기능

- 사용자 및 관리자의 기능 분기
- 백엔드, 프론트엔드 개발 및 운영 환경 분리
- 프론트의 상태 관리
- JPA를 통해 영속성 관리
- 회원의 인증 및 인가 구현
- 첨부파일, 댓글, 정렬 등 게시판이 기본으로 필요로 하는 대부분의 기능 구현
- Junit, Mock을 통한 통합 테스트 코드로 테스트 진행
- 리스트 조회메서드 캐싱 처리로 성능 개선



</br>

## 📌코드 간략설명

<details>
<summary><b>스프링 시큐리티</b></summary>
<div markdown="1">

```java
/**
 * 1. 로그인은 CustomSecurityConfig의 APILoginFilter로부터 시작되며 "/login"으로 시작됩니다.
 * 2. tokenCheckFilter를 통해 요청의 header의 accessToken을 확인합니다.
 * 3. 1) accessToken의 유효기간이 만료된 경우 클라이언트에선 /api/refreshToken 요청합니다
 2) refreshToken이 유효할 경우 accessToken을 재발급하며 기타 정책에 의해 refreshToken를 관리합니다. 
 */
class CustomSecurityConfig {
    ...
	APILoginFilter apiLoginFilter = new APILoginFilter("/login");
		apiLoginFilter.setAuthenticationManager(authenticationManager);
		http.addFilterBefore(apiLoginFilter,UsernamePasswordAuthenticationFilter .class);

	ApiLoginSuccessHandler apiLoginSuccessHandler = new ApiLoginSuccessHandler(jwtUtil);
		apiLoginFilter.setAuthenticationSuccessHandler(apiLoginSuccessHandler);
		
    http.addFilterBefore(

	tokenCheckFilter(jwtUtil, userDetailsService),

	UsernamePasswordAuthenticationFilter .class);
	
    http.addFilterBefore(new

	RefreshTokenFilter("/api/refreshToken",jwtUtil),

	TokenCheckFilter .class);
...
}

```

```java

/**
 Service에서 권한을 체크할 경우 contextHolder에 저장된 사용자의 권한을 체크할 수 있는 메서드
 */
public String getUserAuthority(){
	Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
	if(authentication!=null&&authentication.getPrincipal()instanceof UserDetails){
	UserDetails userDetails=(UserDetails)authentication.getPrincipal();
	Collection<?extends GrantedAuthority> authorities=userDetails.getAuthorities();

	for(GrantedAuthority authority:authorities){
	if(authority.getAuthority().equals("ROLE_ADMIN")){
	return"ROLE_ADMIN";
	}
	}
	}
	return"ROLE_USER";
	}
```

</div>

</br>

## 🔎ERD

![](readmeimage/포트폴리오.png)

</br>

## ⚙️ 아키텍쳐

![](readmeimage/아키텍쳐.png)

## 기술 스택

### 백엔드

<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"></br>
<img src="https://img.shields.io/badge/JPA-59666C?style=flat-square&logo=Hibernate&logoColor=white"></br>
<img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=flat-square&logo=Spring-Security&logoColor=white"></br>

### 프론트엔드

<img src="https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D"></br>
<img src="https://img.shields.io/badge/Pinia-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D"></br>
<img src="https://img.shields.io/badge/Bootstrap--Vue-563D7C?style=flat-square&logo=bootstrap-vue&logoColor=white"></br>
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"></br>

### 데이터베이스

<img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"></br>

### 인프라

<img src="https://img.shields.io/badge/Amazon AWS EC2-232F3E?style=flat-square&logo=amazon-aws&logoColor=white"></br>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"></br>
<img src="https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white"></br>
<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white"></br>

### 버전

- <b>Java 14</b>
- <b>Spring boot 2.7.14</b>
- <b>Vue 3 (Composition API)</b>
- <b>MariaDB 10.11</b>

</br>




