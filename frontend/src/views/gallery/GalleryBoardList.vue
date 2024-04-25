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
              <img :src="'http://localhost:1541/api/files/' + gallery.fileName"
                   class="card-img-top">
              <div class="ms-4">
                <h5 class="card-title">{{ gallery.title }}</h5>
                <p class="card-text">{{ gallery.content }}</p>
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
import {computed, ref, watchEffect, reactive, onMounted, watch} from 'vue';
import {useRouter} from 'vue-router';
import {getGalleries} from "@/api/gallery.js";
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/TheFilter.vue";
import TheModal from "@/components/common/TheModal.vue";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'

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
  size: null,
  type: null,
  keyword: null
});

const pageCount = computed(() =>
    Math.ceil(response.total / params.size)
);

const goRegisterPage = () => {
  if (userName.value === null) {
    show.value = true;
    return;
  }
  router.push('/galleries/register');
};

const fetchData = async () => {
  try {
    const {data} = await getGalleries(params);
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

// 모달로직
const openModal = (index) => {
  show.value = true;
};

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

img {
  width: 200px;
  height: 200px;
}
</style>