<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchBoard"
        @update:size="handleUpdateSize"
        @update:order="handleUpdateOrder"
        @update:sort="handleUpdateSort"
    />
  </div>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <button class="btn btn-primary" @click="goRegisterPage">게시글 등록</button>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">카테고리</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">등록일시</th>
              <th scope="col">수정일시</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="board in response.items">
              <td>{{
                  board.category
                }}
              </td>
              <td>
                <router-link :to="{ name: 'BoardRead', params: { bno: board.bno }}">{{
                    board.title
                  }}
                </router-link>
                <span>[{{
                    board.replyCount
                  }}]</span>
                <span v-if="board.fileCount>=1" class="attachment-icon show">
                  <i class="fas fa-paperclip"></i>
                </span>
              </td>
              <td>{{
                  board.writer
                }}
              </td>
              <td>
                {{
                  board.viewCount
                }}
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
        </div>
      </div>
      <ThePagination :current-page="response.page"
                     :total="response.total"
                     @page="page => (params.page = page)"
                     class="flex-md-grow-0"/>
    </div>
  </div>
</template>
<script setup>
import {computed, ref, watchEffect, reactive, onMounted, watch, inject} from 'vue';
import {useRouter} from 'vue-router';
import {getBoards} from "@/api/board";
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";

defineProps({
  limit: Number,
});

const router = useRouter();
const $axios = inject("$axios")
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
  size: null,
  type: null,
  keyword: null
});

const pageCount = computed(() =>
    Math.ceil(response.total / params.size)
);

const goRegisterPage = () => {
  router.push('/boards/register');
};

const fetchData = async () => {
  try {

    const {data} = await getBoards(params);
    Object.assign(response, data);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

fetchData();

watch(params, async (newVal, oldVal) => {
  console.log(params)
  await fetchData(params)
})

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;

    const {data} = await getBoards(params);
  } catch (e) {
    console.log(e);
  }
}

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
.attachment-icon {
  display: none; /* 기본적으로는 아이콘을 숨깁니다 */
}

.attachment-icon.show {
  display: inline-block; /* 첨부파일이 있는 경우 아이콘을 표시합니다 */
  font-family: 'Font Awesome 5 Free'; /* Font Awesome 아이콘 사용 */
  content: '\f0c6'; /* 클립 아이콘 */
}
</style>