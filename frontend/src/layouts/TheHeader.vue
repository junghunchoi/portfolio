<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">PORTFOLIO</a>
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
							<RouterLink class="nav-link" active-class="active" to="/boards">
								게시글
							</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">
                자유게시판
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">
                갤러리
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">
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
          <div v-else>
            <div> {{userName}}님 안녕하세요 !</div>
            <div><button @click="logoutHandler">로그아웃</button></div>
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

const authStore = useAuthStore();
const { userName, loginSuccess} = storeToRefs(authStore);


const router = useRouter();

const goPage = () => {
	router.push({
		name: 'PostCreate',
	});
};

const goMemberRegister = () => {
  router.push({
    name: 'MemberRegister',
  });
};

const goLogin = () => {
  router.push({
    name: 'Login',
  });
};

const logoutHandler = () =>{
  authStore.logout();
}
</script>

<style lang="scss" scoped></style>
