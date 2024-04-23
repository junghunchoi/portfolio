<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchBoard"
        @update:size="params.size=$event"
        @update:order="params.sort=$event"
        @update:sort="params.sort=$event"
    />
  </div>
  <button class="btn btn-primary mt-3" @click="goRegisterPage">갤러리 등록</button>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
            <div v-for="gallery in response.items" class="">
              <router-link :to="{ name: 'GalleryRead', params: { bno: gallery.bno }}">
              <div class=" d-flex align-items-center mb-3">
                <img :src="'http://localhost:1541/api/files/' + gallery.fileName"  class="card-img-top">
                <div class="ms-4">
                  <h5 class="card-title">{{gallery.title}}</h5>
                  <p class="card-text">{{gallery.content}}</p>
                  <p class="card-text"><small class="text-muted">
                    {{ $dayjs(gallery.regDate).format('YYYY.MM.DD') }}</small></p>
                </div>
              </div>

              </router-link>
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
import {computed, ref, watchEffect, reactive, onMounted, watch} from 'vue';
import {useRouter} from 'vue-router';
import {getGalleries} from "@/api/gallery.js";
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/TheFilter.vue";

defineProps({
  limit: Number,
});

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
    console.log(data);
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

    const {data} = await getGalleries(params);
  } catch (e) {
    console.log(e);
  }
}

</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

img {
  width: 200px;
  height: 200px;
}
</style>