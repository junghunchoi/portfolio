<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchBoard"
        @update:size="params.size=$event"
        @update:order="params.order=$event"
        @update:sort="params.sort=$event"
    />
  </div>
<!--          <button class="btn btn-primary mb-2 mt-2" @click="goRegisterPage">게시글 등록</button>-->
          <table class="table">
            <thead>
            <tr>
              <th scope="col">카테고리</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">등록일시</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="board in response.items">
              <td>{{ board.category }}
              </td>
              <td>
                <router-link :to="{ name: 'BoardRead', params: { bno: board.bno }}">
                  {{ board.title }}
                </router-link>
                <span>[{{ board.replyCount }}]</span>
                <span v-if="board.fileCount>=1" class="attachment-icon show">
                  <i class="fas fa-paperclip"></i>
                </span>
              </td>
              <td>{{ board.writer }}
              </td>
              <td>
                {{ board.viewCount }}
              </td>
              <td>
                {{ $dayjs(board.regDate).format('YYYY.MM.DD') }}
              </td>
            </tr>
            </tbody>
          </table>
      <ThePagination v-show="params.size>=10"
                     :current-page="response.page"
                     :total="response.total"
                     :size="params.size"
                     @page="page => (params.page = page)"
                     class="flex-md-grow-0"/>
<!--  <Teleport to="#modal">-->
<!--    <TheModal-->
<!--        v-model="show"-->
<!--        :isPopup="show"-->
<!--        :title="'확인'"-->
<!--    >-->
<!--      <template #default>-->
<!--        로그인한 사용자만 등록할 수 있습니다.-->
<!--      </template>-->
<!--      <template #actions>-->
<!--        <button class="btn btn-primary" @click="doLoginHandler">로그인</button>-->
<!--        <button class="btn btn-light" @click="closeModal">닫기</button>-->
<!--      </template>-->
<!--    </TheModal>-->
<!--  </Teleport>-->
</template>
<script setup>
import {computed, reactive, watch, inject, ref} from 'vue';
import {useRouter} from 'vue-router';
import ThePagination from "@/components/ThePagination.vue";
import BoardFilter from "@/components/TheFilter.vue";
import TheModal from "@/components/TheModal.vue";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {getBoards} from "@/api/board";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

defineProps({
  limit: Number,
});

const show = ref(false);
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
  sort: "desc",
  page: 1, // 현재 페이지
  size: 10,
  type: null,
  keyword: null
});

const pageCount = computed(() =>
    Math.ceil(response.total / params.size)
);

const goRegisterPage = () => {
  // if (userName.value === null) {
  //   show.value = true;
  //   return;
  // }
  router.push('/boards/register');
};

const fetchData = async () => {
  try {
    const {data} = await getBoards(params);


    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
};
fetchData();

watch(params, async () => {
  await fetchData(params)
})

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;
  } catch (e) {
  }
}
// 모달 로직

const doLoginHandler = () => {
  router.push({name: 'Login'});
}

const closeModal = () => {
  show.value = false;
}

</script>

<style scoped>
.attachment-icon {
  display: none;
}

.attachment-icon.show {
  display: inline-block;
  font-family: 'Font Awesome 5 Free';
  content: '\f0c6';
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

.table td:nth-child(1),
.table td:nth-child(3),
.table td:nth-child(4),
.table td:nth-child(5),
.table td:nth-child(6) {
  white-space: nowrap;
}


table th:nth-child(1),table td:nth-child(1) {
  text-align: center;
  width: 10%;
}

table th:nth-child(2) {
  text-align: center;
  padding-left: 50px;
  width: 45%;
}
table td:nth-child(2){
  text-align: left;
  padding-left: 80px;
}
table th:nth-child(3), table td:nth-child(3) {
  width: 10%;
}
table th:nth-child(4), table td:nth-child(4) {
  width: 10%;
}
table th:nth-child(5), table td:nth-child(5) {
  width: 10%;
}
</style>