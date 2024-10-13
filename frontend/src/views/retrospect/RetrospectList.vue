<template>
  <BoardFilter
      @search="searchBoard"
      @update:size="params.size=$event"
      @update:order="params.order=$event"
      @update:sort="params.sort=$event"
  />

  <button v-if="AUTHORITY === 'ADMIN'" class="btn btn-primary m-2" @click="goRegisterPage">공지 등록
  </button>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">제목</th>
      <th scope="col">조회수</th>
      <th scope="col">등록일시</th>
      <th scope="col">수정일시</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="board in response.items">

      <td>
        <router-link :to="{ name: 'BoardRead', params: { bno: board.bno }}">
          {{ board.title }}
        </router-link>
        <span>[{{ board.replyCount }}]</span>
      </td>
      <td>{{ board.writer }}
      </td>
      <td>
        {{ board.viewCount }}
      </td>
      <td>
        {{ $dayjs(board.regDate).format('YYYY.MM.DD') }}
      </td>
      <td>
        {{ $dayjs(board.modDate).format('YYYY.MM.DD') }}
      </td>
    </tr>
    </tbody>
  </table>
  <ThePagination :current-page="response.page"
                 :total="response.total"
                 :size="params.size"
                 @page="page => (params.page = page)"
                 class="flex-md-grow-0"/>
  <Teleport to="#modal">
    <TheModal
        v-model="show"
        :isPopup="show"
        :title="'확인'"
    >
      <template #default>
        로그인한 사용자만 등록할 수 있습니다.
      </template>
      <template #actions>
        <button class="btn btn-primary" @click="doLoginHandler">로그인</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {inject, onMounted, reactive, ref, watch} from 'vue';
import BoardFilter from "@/components/TheFilter.vue";
import {useRouter} from "vue-router";
import ThePagination from "@/components/ThePagination.vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"
import {useAuthStore} from "@/store/loginStore.js";
import TheModal from "@/components/TheModal.vue";
import {storeToRefs} from 'pinia'
import {getRetrospects} from "@/api/retrospect.js";

defineProps({
  limit: Number,
});

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);
const show = ref(false);
const AUTHORITY = useAuthStore().getAuthorities

const router = useRouter();


const response = reactive({
  items: [],
  end: 0,
  next: null,
  page: 0,
  prev: null,
  size: 0,
  start: 0,
  total: 0
});

const params = reactive({
  order: "regDate",
  sort: "asc",
  page: 1, // 현재 페이지
  size: 10,
  type: null,
  keyword: null
});

const fetchData = async () => {
  try {
    const {data} = await getRetrospects(params)
    console.log(data)
    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
}

watch(params, async () => {
  await fetchData(params)
})

onMounted(() => {
  fetchData();
})

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;
  } catch (e) {
    console.log(e);
  }
}

const goRegisterPage = () => {
  if (userName.value === null) {
    show.value = true;
    return;
  }
  router.push('/retrospects/register');
};


// 모달로직
const doLoginHandler = () => {
  router.push({name: 'Login'});
}

const closeModal = () => {
  show.value = false;
}
</script>

<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --background-color: #f8f9fa;
  --text-color: #333;
  --border-color: #e0e0e0;
  --hover-color: #f1f3f5;
  --header-bg-color: #f1f8ff;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #2980b9;
}

.table-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

thead {
  background-color: var(--header-bg-color);
}

th {
  padding: 15px;
  text-align: left;
  font-weight: bold;
  color: var(--secondary-color);
  border-bottom: 2px solid var(--primary-color);
  text-transform: uppercase;
  font-size: 0.9em;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: var(--hover-color);
}

td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
}

tbody tr:last-child td {
  border-bottom: none;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2980b9;
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 8px 12px;
  background-color: white;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination button:hover, .pagination button.active {
  background-color: var(--primary-color);
  color: white;
}

@media (max-width: 768px) {
  .table-container {
    overflow-x: auto;
  }

  table {
    font-size: 14px;
  }

  th, td {
    padding: 10px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>