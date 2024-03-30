<script setup>
import {computed, ref, watchEffect, reactive, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {getBoards} from "@/api/board";
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";


defineProps({
  limit: Number,
});

const router = useRouter();
const response = reactive({
  dtoList: [],
  end: 0,
  next: null,
  page: 0,
  prev: null,
  size: 0,
  start: 0,
  total: 0
});

const params = ref({
  _limit: 10, // 총 몇개 불러올건지 request header에 "x-total-count" 를 만들어준다.
  page: 1, // 현재 페이지
  size: null,
  type: null,
  keyword: null
});

// const totalCount = ref(0);

const pageCount = computed(() =>
    Math.ceil(response.total / params.value._limit)
);

const goRegisterPage = () => {
  router.push('/boards/register');
};

const fetchData = async () => {
  try {

    const {data, headers} = await getBoards(params.value);
    Object.assign(response, data);
    // totalCount.value = headers["x-total-count"];
    // console.log(headers["x-total-count"]);
  } catch (e) {
    console.error(e);
  }
};

watchEffect(() => {
  fetchData();
});



const searchBoard = async (searchCondition) => {
  try{
    params.value.type = searchCondition.type;
    params.value.keyword = searchCondition.keyword;

    const {data} = await getBoards(params.value);
  }catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchBoard"/>
  </div>

  <div class="row mt-3">
    <div class="col">
      <div class="card">
<!--        <div class="col-3 ">-->
<!--          <select-->
<!--              :value="limit"-->
<!--              @input="$emit('update:limit', $event.target.value)"-->
<!--              class="form-select"-->
<!--          >-->
<!--            <option value="10">10개씩 보기</option>-->
<!--            <option value="25">25개씩 보기</option>-->
<!--            <option value="50">50개씩 보기</option>-->
<!--          </select>-->

<!--        </div>-->
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title">게시물</h5>
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
            <tr v-for="dto in response.dtoList">
              <td>{{
                  dto.category
                }}
              </td>
              <td>
                <router-link :to="{ name: 'BoardRead', params: { bno: dto.bno }}">{{
                    dto.title
                  }}
                </router-link>
                <span class="progress-bar-striped" style="background-color: gray">{{
                    dto.viewCount
                  }}</span>
              </td>
              <td>{{
                  dto.writer
                }}
              </td>
              <td>
                {{
                  dto.viewCount
                }}
              </td>
              <td>
                {{ $dayjs(dto.regDate).format('YYYY. MM. DD HH:mm:ss') }}
              </td>
              <td>
                {{ $dayjs(dto.modDate).format('YYYY. MM. DD HH:mm:ss') }}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div >
      <ThePagination :current-page="response.page"
                     :pageCount="pageCount"
                     @page="page => (params.page = page)"
      class="flex-md-grow-0"/>
    </div>
  </div>


</template>


<style scoped>

</style>