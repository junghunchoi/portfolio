<template>
  <TheRecordCard :api="getStravaList" />
</template>
<script setup>
import {computed, reactive, watch, ref} from 'vue';
import {useRouter} from 'vue-router';
import ThePagination from "@/components/ThePagination.vue";
import BoardFilter from "@/components/TheFilter.vue";
import TheModal from "@/components/TheModal.vue";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {getStravaList} from "@/api/record.js";
import TheRecordCard from "@/views/record/TheRecordCard.vue";

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



watch(params, async () => {
})

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