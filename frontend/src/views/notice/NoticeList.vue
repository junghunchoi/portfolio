<template>
  <BoardFilter
      @search="searchBoard"
      @update:size="params.size=$event"
      @update:order="params.sort=$event"
      @update:sort="params.sort=$event"
  />

  <button v-if="AUTHORITY === 'ADMIN'" class="btn btn-primary m-2" @click="goRegisterPage">공지 등록
  </button>
  <table class="table mt-3">
    <thead>
    <tr>
      <th scope="col">제목</th>
      <th scope="col">조회</th>
      <th scope="col">등록자</th>
      <th scope="col">등록일시</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="notice in response.items" :class="[notice.isMain === 1 ? 'bg-secondary' : '']">
      <td>
        <span v-if="notice.isMain === 1">
          <b class="me-2">[공지]</b>
        </span>
        <router-link :to="{ name: 'NoticeRead', params: { nno: notice.nno }}">
          {{ notice.title }}
        </router-link>
        <span class="ms-1" v-if="isCreatedWithin7Days(notice.regDate)"><b>new</b></span>
      </td>
      <td>
        {{ notice.viewCount }}
      </td>
      <td>{{ notice.writer }}
      </td>
      <td> {{ $dayjs(notice.regDate).format('YYYY.MM.DD') }}
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
import ThePagination from "@/components/common/ThePagination.vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"
import {useAuthStore} from "@/store/loginStore.js";
import TheModal from "@/components/common/TheModal.vue";
import {storeToRefs} from 'pinia'

defineProps({
  limit: Number,
});

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);
const show = ref(false);
const AUTHORITY = useAuthStore().getAuthorities

const router = useRouter();
const $axios = inject('$axios');

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
    const {data} = await $axios.get('/notices', {params: params});
    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
}

watch(params, async () => {
  console.log(123);
  await fetchData(params)
})

onMounted(() => {
  fetchData()
})

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;

    console.log(params);
    const {data} = await $axios.get('/notices', params);
  } catch (e) {
    console.log(e);
  }
}

const goRegisterPage = () => {
  if (userName.value === null) {
    show.value = true;
    return;
  }
  router.push('/notices/register');
};


// 모달로직

const doLoginHandler = () => {
  router.push({name: 'Login'});
}

const closeModal = () => {
  show.value = false;
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}


.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.table th,
.table td {
  padding: 12px;
  text-align: left;
  vertical-align: middle;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.table tr:hover {
  background-color: #f5f5f5;
}

.table .attachment-icon {
  margin-left: 5px;
  color: #007bff;
}

.table .attachment-icon.show {
  display: inline;
}

.table .router-link {
  color: #007bff;
  text-decoration: none;
}

.table .router-link:hover {
  text-decoration: underline;
}

</style>