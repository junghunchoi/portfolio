<template>
  <div class="portfolio-main">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <Typing :text="heroText" :typingSpeed="50"/>
        <h1>{{ fullName }}</h1>
        <p>{{ jobTitle }}</p>
      </div>
    </section>

    <!-- Activity Tracker -->
    <section class="activity-tracker">
      <div class="container">
        <h2>최근 활동</h2>
        <div class="activity-grid">
          <div
              v-for="activity in activities"
              :key="activity.type"
              class="activity-card"
          >
            <img :src="activity.gifUrl" :alt="activity.type + ' 애니메이션'"/>
            <h3>{{ activity.type }}</h3>
            <p>{{ activity.data }} {{ activity.unit }}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <HorizonLayout :strava-list="stravaList"/>
    </section>
  </div>

  <!-- Modal -->
  <Teleport to="#modal">
    <TheModal v-model="show" :isPopup="show" :title="'확인'">
      <template #default>
        {{ modalText }}
      </template>
      <template #actions>
        <button
            v-if="userName === null"
            class="btn btn-primary"
            @click="doLoginHandler"
        >
          로그인
        </button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {storeToRefs} from 'pinia';
import {useAuthStore} from '@/store/loginStore.js';
import {getStravaDataForMain} from '@/api/strava.js';
import {getMainRecords} from '@/api/main.js';
import TheModal from '@/components/TheModal.vue';
import Typing from '@/components/Typing.vue';
import HorizonLayout from "@/components/HorizonLayout.vue";

const authStore = useAuthStore();
const {userName, getAuthorities} = storeToRefs(authStore);
const AUTHORITY = getAuthorities.value;
const router = useRouter();

const show = ref(false);
const modalText = ref('');

// const fullName = ref('최정훈');
// const jobTitle = ref('풀스택 개발자');
const heroText = ref('안녕하세요.\n제 포트폴리오에 오신 것을 환영합니다 👋');
const email = ref('example@email.com');

const stravaList = reactive([]);
const mainRecords = reactive([]);

const activities = reactive([
  {type: '달리기', gifUrl: '/running.gif', data: 5, unit: 'km'},
  {type: '자전거', gifUrl: '/cycling.gif', data: 20, unit: 'km'},
  {type: '공부 (# 1뽀모도르 = 25분)', gifUrl: '/studying.gif', data: 3, unit: '개'},
  {type: '독서', gifUrl: '/reading.gif', data: 3, unit: '권'},
]);

onMounted(async () => {
  const res = await getStravaDataForMain();
  const res2 = await getMainRecords();
  Object.assign(stravaList, res.data.resultData);
  Object.assign(mainRecords, res2.data.resultData);
});


const doLoginHandler = () => {
  router.push({name: 'Login'});
};

const closeModal = () => {
  show.value = false;
};
</script>

<style scoped>
.portfolio-main {
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero {
  background-color: #f8f9fa;
  padding: 80px 0;
  text-align: center;
}

.hero h1 {
  font-size: 3em;
  margin-bottom: 10px;
}


.notice-list li,
.board-list li,
.help-list li {
  margin-bottom: 10px;
}

.gallery-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}


.social-links a {
  font-size: 24px;
  margin: 0 10px;
  color: #333;
}

.activity-tracker {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  overflow-x: auto;
}

.activity-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .activity-grid {
    grid-template-columns: 1fr;
    overflow-x: visible;
  }

  .activity-card {
    width: 100%;
  }
}
</style>
