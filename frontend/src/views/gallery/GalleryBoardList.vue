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
          <button class="btn btn-primary" @click="goRegisterPage">갤러리 등록</button>
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThePagination :current-page="response.page"
                     :pageCount="pageCount"
                     @page="page => (params.page = page)"
                     class="flex-md-grow-0"/>
    </div>
  </div>


</template>
<script setup>
import {computed, ref, watchEffect, reactive, onMounted, watch} from 'vue';
import {useRouter} from 'vue-router';
import {getGalleries} from "@/api/gallery";
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

const params = reactive({
  order: "regDate",
  sort: "asc",
  page: 1, // 현재 페이지
  size: null,
  type: null,
  keyword: null
});

const pageCount = computed(() =>
    Math.ceil(response.total / params.size)
);

const goRegisterPage = () => {
  router.push('/galleries/register');
};

const fetchData = async () => {
  try {

    const {data} = await getGalleries(params);
    Object.assign(response, data);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

fetchData();

watch(params, async (newVal, oldVal) => {
  await fetchData(params)
})

const searchBoard = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;

    const {data} = await getGalleries(params);
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


</style>