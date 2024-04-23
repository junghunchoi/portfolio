<template>
  <section>
    <div class="row">
      <div class="col-12 mb-3">
        <h2>{{ gallery.title }}</h2>
        <p class="text-muted">작성자: {{ gallery.writer }} | 조회수: {{ gallery.viewCount }}</p>
      </div>
    </div>
  </section>
  <section>
    <div class="slider-container">
      <div class="slide_wrap">
        <div class="slide_box">
          <div class="slide_list"
               :style="{ width: slideWidth * (gallery.files.length + 2) + 'px'
                   , transform: `translate3d(-${slideWidth * (currentSlideIndex + 1)}px, 0px, 0px)`
                   , transition: `${transitionSpeed}ms` }">
            <!-- 마지막 슬라이드를 첫 위치에 복제 -->
            <div class="slide_content" v-if="gallery.files && gallery.files.length > 0">
              <img :src="'http://localhost:1541/api/files/' +gallery.files[gallery.files.length - 1].uploadedFileName"
                   alt="Slide Image">
            </div>
            <!-- 원본 슬라이드 -->
            <div class="slide_content" v-for="file in gallery.files">
              <img :src="'http://localhost:1541/api/files/' + file.uploadedFileName">
            </div>
            <!-- 첫 슬라이드를 마지막 위치에 복제 -->
            <div class="slide_content" v-if="gallery.files && gallery.files.length > 0">
              <img :src="'http://localhost:1541/api/files/' + gallery.files[0].uploadedFileName" alt="Slide Image">
            </div>
          </div>
        </div>
        <!-- 이전/다음 버튼 -->
        <div class="slide_btn_box">
          <button class="btn  slide_btn_prev" @click="moveSlide('prev')"><i
              class="bi bi-arrow-left"></i></button>
          <button class="btn slide_btn_next" @click="moveSlide('next')"><i
              class="bi bi-arrow-right"></i></button>
        </div>
        <!-- 페이지네이션 -->
        <ul class="slide_pagination">
          <li v-for="(file, index) in gallery.files"
              :key="index"
              class="dot"
              :class="{ 'dot_active': currentSlideIndex === index }"
              @click="setSlide(index)"></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="container my-5">
    <div class="row">
          <TheEditor
              v-if="gallery.content"
              :init-eeditor-data="gallery.content"
              v-model:editorData="gallery.content"
              :isDisabled="true"/>
    </div>
  </section>
  <ReplyArea :bno="bno" :reply-list="replies.list" v-model="replyText"
             @update:replyText="loadReplyDate" @replyDelete="loadReplyDate"/>
  <div class="float-end">
    <button type="button" class="btn btn-primary m-1" @click="goGalleryPage">목록</button>
    <button v-if="gallery.writer === userName" type="button" class="btn btn-secondary m-1" @click="modifyGallery">수정</button>
    <button v-if="gallery.writer === userName" type="button" class="btn btn-danger m-1"  @click="openModal">삭제</button>
  </div>
  <Teleport to="#modal">
    <TheModal
        v-model="show"
        :is-popup="show"
        :title="'확인'"
    >
      <template #default>
        정말로 삭제하시겠습니까?
      </template>
      <template #actions>
        <button class="btn btn-danger" @click="clickRemoveHandler">삭제</button>
        <button class="btn btn-light" @click="closeModal">닫기</button>
      </template>
    </TheModal>
  </Teleport>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import ReplyArea from "@/views/reply/ReplyArea.vue";
import {getReplies} from "@/api/reply.js";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {getGalleryBybno,deleteGallery} from "@/api/gallery.js";
import TheModal from "@/components/common/TheModal.vue";
import TheEditor from "@/components/common/TheEditor.vue";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const route = useRoute();
const router = useRouter();
const bno = ref(Number(route.params.bno));
const replyText = ref('');

const gallery = reactive({
  bno: '',
  title: '',
  content: '',
  writer: '',
  viewCount: 0,
  files: [],
  regDate: new Date(),
  modDate: new Date(),
});

const replies = reactive({list: []});

const loadGalleryData = async () => {
  try {
    const {data} = await getGalleryBybno(bno.value);
    Object.assign(gallery, data); // gallery 객체에 데이터 할당
  } catch (e) {
    console.error(e);
  }
};

const loadReplyDate = async () => {
  const response = await getReplies(bno.value); // getReplies 호출 시 bno 값 전달 수정
  const replyList = response.data.resultData.items.map(reply => ({
    ...reply,
    bno: bno.value
  }));
  replies.list = replyList;
}

onMounted(async () => {
  await loadGalleryData();
  await loadReplyDate();
});

const goGalleryPage = () => {
  router.push('/galleries');
};

const modifyGallery = () => {
  router.push({name: 'GalleryModify', params: {bno: bno.value}});
}

const clickRemoveHandler = () => {
  deleteDateAndGolist();
}

async function deleteDateAndGolist() {
  await deleteGallery(bno.value);
  router.push({name: 'GalleryList'}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

// modal
const show = ref(false);

const openModal = () => {
  show.value = true;
};

const closeModal = () =>{
  show.value = false;
}

// 슬라이드 페이지
const currentSlideIndex = ref(0); // 현재 슬라이드 인덱스
const slideWidth = 400; // 슬라이드 너비
const transitionSpeed = ref(300); // 애니메이션 속도

const moveSlide = (direction) => {
  if (direction === 'next') {
    if (currentSlideIndex.value < gallery.files.length - 1) {
      currentSlideIndex.value++;
    } else {
      currentSlideIndex.value = -1; // 첫 번째 슬라이드로 순환
    }
  } else if (direction === 'prev') {
    if (currentSlideIndex.value > 0) {
      currentSlideIndex.value--;
    } else {
      currentSlideIndex.value = gallery.files.length; // 마지막 슬라이드로 순환
    }
  }

  // 애니메이션 없이 순환 처리
  transitionSpeed.value = direction === 'next' && currentSlideIndex.value === -1 || direction
  === 'prev' && currentSlideIndex.value === gallery.files.length ? 0 : 300;

  // 순환 로직 처리 후 인덱스 조정
  if (direction === 'next' && currentSlideIndex.value === -1) {
    setTimeout(() => {
      transitionSpeed.value = 300;
      currentSlideIndex.value = 0;
    }, 300);
  } else if (direction === 'prev' && currentSlideIndex.value === gallery.files.length) {
    setTimeout(() => {
      transitionSpeed.value = 300;
      currentSlideIndex.value = gallery.files.length - 1;
    }, 300);
  }
};

// 특정 슬라이드로 직접 이동
const setSlide = (index) => {
  currentSlideIndex.value = index;
};
</script>


<style scoped>

.slider-container {
  width: 1000px;
  margin: auto;
  overflow: hidden;
}

.slide_wrap {
  position: relative;
  width: 400px;
  margin: auto;
  padding-bottom: 30px;
}

.slide_box {
  width: 100%;
  margin: auto;
  overflow-x: hidden;
}

.slide_list {
  display: flex;
}

.slide_content img {
  width: 400px; /* slideWidth와 일치해야 함 */
  height: 400px;
}

.slide_btn_box > .slide_btn_prev {
  left: -100px;
}

.slide_btn_box > .slide_btn_next {
  right: -100px;
}

.slide_btn_box > button {
  position: absolute;
  top: 50%;
  margin-top: -45px;
  width: 60px;
  height: 60px;
  font-size: 16px;
  color: #999;
  background: none;
  border: 1px solid #ddd;
  cursor: pointer;
}

.slide_pagination {
  position: absolute;
  left: 50%;
  bottom: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  transform: translateX(-50%);
}

.dot {
  cursor: pointer;
  padding: 5px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
}

.dot_active {
  background-color: #717171;
}

.slide_pagination .dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  overflow: hidden;
  background: #ddd;
  border-radius: 50%;
  transition: 0.3s;
}

.slide_pagination .dot.dot_active {
  background: #333;
}
</style>