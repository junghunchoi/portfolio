<template>
  <div class="row mt-3">
    <BoardFilter
        @search="searchHelp"
        @update:size="params.size=$event"
        @update:order="params.sort=$event"
        @update:sort="params.sort=$event"
    />
  </div>
  <button class="btn btn-primary mb-3 mt-3" @click="goRegisterPage">문의 등록</button>
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
        <a @click="checkValidateUser(help)">
          {{ help.title }}
          <span v-if="help.answer">(답변완료)</span>
          <span v-else>(미답변)</span>
          <span class="ms-1" v-if="isCreatedWithin7Days(help.regDate)"><b>new</b></span>
        </a>
        <span v-if="help.isSecret===1" class="attachment-icon show">
                  <i class="bi bi-lock"></i>
                </span>
      </td>
      <td>{{ help.writer }}
      </td>
      <td>
        {{ help.viewCount }}
      </td>
      <td>
        {{ $dayjs(help.regDate).format('YYYY.MM.DD') }}
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
        {{ modalText }}
      </template>
      <template #actions>
        <button v-if="userName===null" class="btn btn-primary" @click="doLoginHandler">로그인</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {computed, inject, onMounted, reactive, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import ThePagination from "@/components/common/ThePagination.vue";
import BoardFilter from "@/components/TheFilter.vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheModal from "@/components/common/TheModal.vue";

const authStore = useAuthStore();
const {userName, getAuthorities} = storeToRefs(authStore);
const show = ref(false);
const AUTHORITY = getAuthorities.value;
const $axios = inject("$axios")
const modalText = ref('')
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
  if (userName.value === null) {
    modalText.value = '로그인한 사용자만 등록할 수 있습니다.'
    show.value = true;
    return;
  }
  router.push({name: 'HelpRegister'});
};

const fetchData = async () => {
  try {
    const {data} = await $axios.get('/helps', {params: params});
    Object.assign(response, data.resultData);
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
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
  if (help.isSecret === 0 || AUTHORITY === 'ADMIN') {
    router.push({name: 'HelpRead', params: {hno: Number(help.hno)}})
    return;
  }

  if (userName._value === help.writer) {
    router.push({name: 'HelpRead', params: {hno: Number(help.hno)}})
  } else {
    modalText.value = '비밀글은 작성한 사용자만 확인할 수 있습니다.'
    show.value = true
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
</style>