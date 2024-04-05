<template>
  <section>
    <div>{{
        gallery.title
      }}
    </div>
    <div>{{
        gallery.title
      }}
    </div>
    <div>{{
        gallery.writer
      }}
    </div>
    <div>{{
        gallery.viewCount
      }}
    </div>
  </section>
  <section>
    <div id="container">
      <div class="slide_wrap">
        <div class="slide_box">
          <div v-for="file in gallery.files" class="slide_list clearfix">
            <div class="slide_content slide01">
              <img :src="'data:image/jpeg;base64,' + file">
            </div>

          </div>
        </div>
        <div class="slide_btn_box">
          <button type="button" class="slide_btn_prev">Prev</button>
          <button type="button" class="slide_btn_next">Next</button>
        </div>
        <ul class="slide_pagination"></ul>
      </div>
    </div>
  </section>
  <section>
    <div>
      {{
        gallery.content
      }}
    </div>
  </section>
  <ReplyArea :bno="bno" :reply-list="replies.list" v-model="replyText"
             @update:replyText="loadReplyDate" @replyDelete="loadReplyDate"/>

</template>

<script setup>
import {ref, watch, onMounted, reactive} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import ReplyArea from "@/views/reply/ReplyArea.vue";
import {getReplies, registerReply} from "@/api/reply";
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {getGalleryBybno} from "@/api/gallery";

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
    console.log(data)
  } catch (e) {
    console.error(e);
  }
};

const loadReplyDate = async () => {
  const response = await getReplies(bno.value); // getReplies 호출 시 bno 값 전달 수정
  const replyList = response.data.items.map(reply => ({
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
  router.push({name: 'GalleryModify', params: {bno: bno.value}}); // bno는 이동하려는 라우트의 경로에 정의된 파라미터입니다.
}

// 함수 호출


</script>
<script>
const slideList = document.querySelector('.slide_list');  // Slide parent dom
const slideContents = document.querySelectorAll('.slide_content');  // each slide dom
const slideBtnNext = document.querySelector('.slide_btn_next'); // next button
const slideBtnPrev = document.querySelector('.slide_btn_prev'); // prev button
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length;  // slide length
const slideWidth = 400; // slide width
const slideSpeed = 300; // slide speed
slideList.style.width = slideWidth * (slideLen) + "px";
let curIndex = 0; // current slide index (except copied slide)
// /** Next Button Event */
slideBtnNext.addEventListener('click', function() {  if (curIndex < slideLen - 1) {    slideList.style.transition = slideSpeed + "ms";    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";  } else {    slideList.style.transform = "translate3d(0px, 0px, 0px)";    curIndex = -1;  }  curSlide = slideContents[++curIndex];});


</script>

<style scoped>
#container {
  width: 1000px;
  margin: auto;
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

.slide_content {
  display: table;
  float: left;
  width: 400px;
  height: 400px;
}

.slide_content > p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 100px;
  font-weight: bold;
  color: #555;
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

.slide_btn_box > .slide_btn_prev {
  left: -100px;
}

.slide_btn_box > .slide_btn_next {
  right: -100px;
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

.slide_pagination .dot a {
  display: block;
  width: 100%;
  height: 100%;
}
</style>