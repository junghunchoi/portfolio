<template>
  <header ref="header" class="korean-font-component" :class="{ 'dragging': isDragging }">
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <span class="site-title">정훈's 사이트</span>
        </a>
        <button
            class="navbar-toggler custom-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="navbar-collapse custom-collapse"
            :class="{ 'show': isNavbarOpen }"
            id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active"  to="/retrospects">회고</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/boards">블로그</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/records">기록</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link custom-nav-link" active-class="active" to="/patch-note">패치노트</RouterLink>
            </li>
          </ul>
<!--          <div v-if="!loginSuccess"-->
<!--               class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center mt-3 mt-lg-0">-->
<!--            <router-link v-if="!loginSuccess" to="/login" class="btn custom-btn-outline me-0 me-lg-2 mb-2 mb-lg-0">-->
<!--              Login-->
<!--            </router-link>-->
<!--            <button class="btn custom-btn-secondary" type="button" @click="goMemberRegister">회원가입</button>-->
<!--          </div>-->
<!--          <div v-else class="d-flex flex-wrap align-items-center mt-3 mt-lg-0">-->
<!--            <div v-if="AUTHORITY === 'ADMIN'" class="admin-badge me-2 mb-2 mb-sm-0">관리자</div>-->
<!--            <div class="user-name me-2 mb-2 mb-sm-0">{{ userName }}님</div>-->
<!--            <button class="btn btn-sm custom-btn-light fw-bold logout-btn" @click="logoutHandler">로그아웃</button>-->
<!--          </div>-->
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {onMounted, onUnmounted, ref, watch} from 'vue';

const authStore = useAuthStore();
const {userName, loginSuccess} = storeToRefs(authStore);

const header = ref(null);
const isDragging = ref(false);
const isNavbarOpen = ref(false);
const navbarContent = ref(null);

const AUTHORITY = useAuthStore().getAuthorities
const router = useRouter();

const goMemberRegister = () => {
  router.push({
    name: 'MemberRegister',
  });
};

const logoutHandler = () => {
  authStore.logout();
}

const handleDragStart = () => {
  isDragging.value = true;
};

const handleDragEnd = () => {
  isDragging.value = false;
};

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

onMounted(() => {
  document.addEventListener('dragstart', handleDragStart);
  document.addEventListener('dragend', handleDragEnd);
  navbarContent.value = document.getElementById('navbarSupportedContent');
});

onUnmounted(() => {
  document.removeEventListener('dragstart', handleDragStart);
  document.removeEventListener('dragend', handleDragEnd);
});

watch(isNavbarOpen, (newValue) => {
  if (navbarContent.value) {
    if (newValue) {
      navbarContent.value.style.maxHeight = `${navbarContent.value.scrollHeight}px`;
    } else {
      navbarContent.value.style.maxHeight = '0';
    }
  }
});
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

.korean-font-component {
  font-family: 'Noto Sans KR', sans-serif;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  margin: 15px;
  border-radius: 20px;
}

.dragging {
  background-color: rgba(0, 0, 0, 0.9);
}

.custom-navbar {
  padding: 0.7rem 1.5rem;
}

.site-title {
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.7px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.custom-nav-link {
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
  border-radius: 15px;

  &:hover {
    color: #fff !important;
    background-color: rgba(255,255,255,0.1);
  }

  &.active {
    background-color: rgba(255,255,255,0.2);
    color: #fff !important;
  }
}

.custom-btn-outline {
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
  }
}

.custom-btn-secondary {
  background-color: #6c757d;
  color: #fff;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5a6268;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
}

.custom-btn-light {
  background-color: #f8f9fa;
  color: #007bff;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e2e6ea;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
}

.custom-toggler {
  border-color: rgba(255, 255, 255, 0.7);

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.7)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
}

.admin-badge {
  background-color: #ffc107;
  color: #000;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  white-space: nowrap;
}

.user-name {
  font-weight: 500;
  white-space: nowrap;
  color: #fff;
}

.logout-btn {
  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
}

@media (max-width: 991px) {
  .navbar-nav {
    margin-bottom: 1rem;
  }

  .custom-nav-link {
    background-color: rgba(255, 255, 255, 0.2);
  }



  .admin-badge,
  .user-name,
  .logout-btn {
    margin-right: 0.5rem;
  }
}

.navbar-collapse {
  transition: max-height 0.35s ease-out;
  max-height: 0;
  overflow: hidden;
}

.navbar-collapse.show {
  max-height: 500px;
}

@media (min-width: 992px) {
  .custom-collapse {
    max-height: none !important;
    overflow: visible !important;
  }
}
</style>