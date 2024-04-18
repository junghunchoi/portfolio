<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchHelp"
        @update:size="handleUpdateSize"
        @update:order="handleUpdateOrder"
        @update:sort="handleUpdateSort"
    />
  </div>
  <div class="row mt-3">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <button class="btn btn-primary" @click="goRegisterPage">문의 등록</button>
          <table class="table">
            <thead>
            <tr>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th style="width: 20%;" scope="col">등록일시</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="help in response.items">
              <td>
                <a @click="checkValidateUser(help)">{{
                    help.title
                  }}
                  <span v-if="help.answer">(답변완료)</span>
                  <span v-else>(미답변)</span>
                  <span  v-if="isCreatedWithin7Days(help.regDate)"><b>new</b></span>
                </a>

                <span v-if="help.isSecret===1" class="attachment-icon show">
                  <i class="bi bi-lock"></i>
                </span>
              </td>
              <td>{{
                  help.writer
                }}
              </td>
              <td>
                {{
                  help.viewCount
                }}
              </td>
              <td>
                {{ $dayjs(help.regDate).format('YYYY.MM.DD') }}
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
  <Teleport to="#modal">
    <TheModal
        :isPopup="show"
        :title="'확인'"
    >
      <template #default>
        비밀글은 작성한 사용자만 확인할 수 있습니다.
      </template>
      <template #actions>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {computed, inject, onMounted, reactive, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import {getHelps} from "@/api/help";
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheModal from "@/components/common/TheModal.vue";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);


const $axios = inject("$axios")
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
  router.push({name: 'HelpRegister'});
};

const fetchData = async () => {
  try {
    const {data} = await $axios.get('/helps', {params:params});
    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
};

onMounted(() =>{
  fetchData();
})

watch(params, async (newVal, oldVal) => {
  await fetchData(params)
})

const searchHelp = async (searchCondition) => {
  try {
    params.type = searchCondition.type;
    params.keyword = searchCondition.keyword;

    const {data} = await getHelps(params);
  } catch (e) {
    console.log(e);
  }
}

const checkValidateUser = (help) => {
  if (help.isSecret === 0) {
    router.push({name: 'HelpRead', params: {hno: Number(help.hno)}})
  } else {
    if (userName._value === help.writer) {
      router.push({name: 'HelpRead', params: {hno: Number(help.hno)}})
    } else {
      show.value = true
    }
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

// 모달 로직

const show = ref(false);

const closeModal = () => {
  show.value = false;
}

</script>

<style scoped>
</style>