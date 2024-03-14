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
					</ul>
					<div class="d-flex mg">
						<button class="btn btn-light ms-1" type="button" @click="goLogin">
							로그인
						</button>
            <button class="btn btn-secondary" type="button" @click="goMemberRegister">
              회원가입
            </button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

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
</script>

<style lang="scss" scoped></style>
