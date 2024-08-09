<template>
  <header>
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <span class="site-title">정훈's 사이트</span>
        </a>
        <button
            class="navbar-toggler custom-toggler"
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
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/notices">공지</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/boards">자유게시판</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/galleries">갤러리</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/helps">문의 게시판</RouterLink>
            </li>
          </ul>
          <div v-if="!loginSuccess" class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0">
            <router-link v-if="!loginSuccess" to="/login" class="btn custom-btn-outline me-0 me-lg-2 mb-2 mb-lg-0">Login</router-link>
            <button class="btn custom-btn-secondary" type="button" @click="goMemberRegister">회원가입</button>
          </div>
          <div v-else class="d-flex flex-wrap align-items-center mt-3 mt-lg-0">
            <div v-if="AUTHORITY === 'ADMIN'" class="admin-badge me-2 mb-2 mb-sm-0">관리자</div>
            <div class="user-name me-2 mb-2 mb-sm-0">{{ userName }}님</div>
            <button class="btn btn-sm custom-btn-light fw-bold logout-btn" @click="logoutHandler">로그아웃</button>
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

const header = ref(null);
const originalBackgroundColor = ref('');

let collapse;
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

const handleDragStart = () => {
  originalBackgroundColor.value = header.value.style.backgroundColor;
  header.value.style.backgroundColor = 'transparent';
};

const handleDragEnd = () => {
  header.value.style.backgroundColor = originalBackgroundColor.value;
};

onMounted(() => {
  collapse = new Collapse(document.getElementById('navbarSupportedContent'), {
    toggle: false
  });
  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('dragend', handleDragEnd);
});

onUnmounted(() => {
  if (collapse) {
    collapse.dispose();
  }

  document.removeEventListener('dragstart', handleDragStart);
  document.removeEventListener('dragend', handleDragEnd);
});

const toggleNavbar = () => {
  collapse.toggle();
};
</script>


<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  padding-bottom: 30px;
}

.custom-navbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
}

.site-title {
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 0.5px;
}

.custom-nav-link {
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: purple !important;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
}

.custom-btn-outline {
  color: #fff;
  border-color: #fff;
  &:hover {
    background-color: #fff;
    color: #007bff;
  }
}

.custom-btn-secondary {
  background-color: #6c757d;
  color: #fff;
  &:hover {
    background-color: #5a6268;
  }
}

.custom-btn-light {
  background-color: #f8f9fa;
  color: #007bff;
  &:hover {
    background-color: #e2e6ea;
  }
}

.custom-toggler {
  border-color: rgba(255,255,255,0.5);
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
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
  color: #fff;
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

  .custom-nav-link.active {
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