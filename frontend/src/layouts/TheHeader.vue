<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <span class="site-title">정훈's 사이트</span>
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/notices">공지</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/boards">자유게시판</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/galleries">갤러리</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/helps">문의 게시판</RouterLink>
            </li>
          </ul>
          <div v-if="!loginSuccess" class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0">
            <router-link v-if="!loginSuccess" to="/login" class="btn btn-outline-light me-0 me-lg-2 mb-2 mb-lg-0">Login</router-link>
            <button class="btn btn-secondary" type="button" @click="goMemberRegister">회원가입</button>
          </div>
          <div v-else class="d-flex flex-wrap align-items-center mt-3 mt-lg-0">
            <div v-if="AUTHORITY === 'ADMIN'" class="admin-badge me-2 mb-2 mb-sm-0">관리자</div>
            <div class="user-name me-2 mb-2 mb-sm-0">{{ userName }}님</div>
            <button class="btn btn-sm btn-light fw-bold logout-btn" @click="logoutHandler">로그아웃</button>
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
import { Collapse } from 'bootstrap';
import { onMounted, onUnmounted, ref } from 'vue';

//todo 포트폴리오, 블로그, 일기 또는 회고, 로그인
const authStore = useAuthStore();
const { userName, loginSuccess} = storeToRefs(authStore);
let collapse;
const navbarCollapse = ref(null);
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

onMounted(() => {
  collapse = new Collapse(document.getElementById('navbarSupportedContent'), {
    toggle: false
  });
});

onUnmounted(() => {
  if (collapse) {
    collapse.dispose();
  }
});

const toggleNavbar = () => {
  collapse.toggle();
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.site-title {
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #f8f9fa !important;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
}

.btn {
  transition: all 0.3s ease;
}

.admin-badge {
  background-color: #ffc107;
  color: #000;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  white-space: nowrap;
}

.user-name {
  font-weight: bold;
  white-space: nowrap;
}

.logout-btn {
  &:hover {
    background-color: #e9ecef;
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    margin-bottom: 1rem;
  }

  .nav-link.active {
    border-bottom: none;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .admin-badge,
  .user-name,
  .logout-btn {
    margin-right: 0.5rem;
  }
}
</style>
