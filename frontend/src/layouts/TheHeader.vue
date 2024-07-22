<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">정훈's 사이트</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<RouterLink class="nav-link" active-class="active" to="/notices">
								공지
							</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">
                자유게시판
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/galleries">
                갤러리
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/helps" >
                문의 게시판
              </RouterLink>
            </li>
					</ul>
					<div v-if="!loginSuccess" class="d-flex mg">
            <router-link v-if="!loginSuccess" to="/login" class="btn btn-outline-light me-2">Login</router-link>
            <button class="btn btn-secondary" type="button" @click="goMemberRegister">
              회원가입
            </button>
					</div>
          <div class="d-flex justify-content-center" v-else>
            <div v-if="AUTHORITY === 'ADMIN'">
              <b>관리자 : </b>
            </div>
            <div class="ms-1"><b> {{userName}}님 </b></div>
            <div class="me-2 ms-2" ><button class="btn btn-sm btn-light fw-bold" @click="logoutHandler">로그아웃</button></div>
          </div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import { storeToRefs } from 'pinia'

//todo 포트폴리오, 블로그, 일기 또는 회고, 로그인
const authStore = useAuthStore();
const { userName, loginSuccess} = storeToRefs(authStore);

const AUTHORITY = useAuthStore().getAuthorities
const router = useRouter();
const goMemberRegister = () => {
  router.push({
    name: 'MemberRegister',
  });
};

const logoutHandler = () =>{
  authStore.logout();
}
</script>

<style lang="scss" scoped></style>
