<template>
  <BoardFilter
      @search="searchBoard"
      @update:size="handleUpdateSize"
      @update:order="handleUpdateOrder"
      @update:sort="handleUpdateSort"
  />

  <button v-if="AUTHORITY === 'ADMIN'" class="btn btn-primary m-2" @click="goRegisterPage">공지 등록</button>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">제목</th>
      <th scope="col">조회</th>
      <th scope="col">등록자</th>
      <th scope="col">등록일시</th>
    </tr>
    </thead>
    <tbody>
    <tr  v-for="notice in response.items" :class="[notice.isMain === 1 ? 'bg-secondary' : '']">
      <td>
        <span v-if="notice.isMain === 1">
          [공지]
        </span>
        <router-link :to="{ name: 'NoticeRead', params: { nno: notice.nno }}">{{
            notice.title
          }}
        </router-link>
        <span  v-if="isCreatedWithin7Days(notice.regDate)"><b>new</b></span>
      </td>
      <td>
        {{
          notice.viewCount
        }}
      </td>
      <td>{{
          notice.writer
        }}
      </td>
      <td> {{ $dayjs(notice.regDate).format('YYYY.MM.DD') }}
      </td>
    </tr>
    </tbody>
  </table>
  <ThePagination :current-page="response.page"
                 :total="response.total"
                 @page="page => (params.page = page)"
                 class="flex-md-grow-0"/>
</template>

<script setup>
import {inject, reactive, ref, watchEffect} from 'vue';
import BoardFilter from "@/components/board/BoardFilter.vue";
import {useRouter} from "vue-router";
import ThePagination from "@/components/common/ThePagination.vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"
import {useAuthStore} from "@/store/loginStore.js";

const AUTHORITY = useAuthStore().getAuthorities
defineProps({
  limit: Number,
});

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
  size: null,
  type: null,
  keyword: null
});

const fetchData = async () => {
  try {
    const {data} = await $axios.get('/notices', {params:params});
    console.log(data.resultData)
    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
}

watchEffect(() => {
  fetchData();
});

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;

    const {data} = await $axios.get('/notices', params);
  } catch (e) {
    console.log(e);
  }
}

const goRegisterPage = () => {
  router.push('/notices/register');
};


const handleUpdateSize = (value) => {
  params.size = value;
}

const handleUpdateOrder = (value) => {
  params.order = value;
}

const handleUpdateSort = (value) => {
  params.sort = value;
}
</script>

<style scoped>

</style>