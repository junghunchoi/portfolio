<template>
  <section>
  <section>
    <div class="container">
      <div class="record">
        <div class="activity-display">
          <div class="activity-container" v-for="activity in activities" :key="activity.type">
            <div class="gif-container">
              <img :src="activity.gifUrl" :alt="activity.type + ' 애니메이션'" class="activity-gif">
            </div>
            <div class="activity-info">
              <h3>{{ activity.type }}</h3>
              <p>{{ activity.data }} {{ activity.unit }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <BoardCard class="col m-4"
                   :title="'공지사항'"
                   :destination="'/notices'">
          <div>
            <table class="table">
              <tbody>
              <tr v-for="notice in notices" :class="[notice.isMain === 1 ? 'bg-secondary' : '']">
                <td>
                  <span v-if="notice.isMain === 1">
                    [공지]
                  </span>
                  <router-link :to="{ name: 'NoticeRead', params: { nno: notice.nno }}">
                    {{ notice.title }}
                  </router-link>
                  <span class="ms-1" v-if="isCreatedWithin7Days(notice.regDate)"><b>new</b></span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </BoardCard>
        <BoardCard class="col m-4"
                   :title="'자유게시판'"
                   :destination="'/boards'">
          <table class="table">
            <tbody>
            <tr v-for="board in boards">

              <td>
                <router-link :to="{ name: 'BoardRead', params: { bno: board.bno }}">
                  {{ board.title }}
                </router-link>
                <span>[{{ board.replyCount }}]</span>
                <span class="ms-1" v-if="isCreatedWithin7Days(board.regDate)"><b>new</b></span>
                <span v-if="board.fileCount>=1" class="ms-1 attachment-icon show">
                  <i class="fas fa-paperclip"></i>
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </BoardCard>
      </div>

      <div class="row">
        <BoardCard class="col m-4"
                   :title="'갤러리'"
                   :destination="'/galleries'">
          <div v-for="gallery in galleries" class="media mb-3">
            <div @click="readGalleryHandler(gallery.bno)" style="display: flex; align-items: center;">
              <img :src="`${BASE_URL}/files/${gallery.fileName}`" class="mr-3 mt-1">
              <h5 class="mt-0">{{ gallery.title }} <span class="ms-1"
                                                         v-if="isCreatedWithin7Days(gallery.regDate)"><b>new</b></span>
              </h5>
            </div>
          </div>
        </BoardCard>
        <BoardCard class="col m-4"
                   :title="'문의게시판'"
                   :destination="'/helps'">
          <table class="table">
            <tbody>
            <tr v-for="help in helps">
              <td>
                <label @click="readHelpHandler(help.writer, help.hno, help.isSecret)">
                  <span>{{ help.title }}</span>
                  <span v-if="help.answer">(답변완료)</span>
                  <span v-else>(미답변)</span>
                  <span class="ms-1" v-if="isCreatedWithin7Days(help.regDate)"><b>new</b></span>
                  <span v-if="help.isSecret===1" class="ms-1 attachment-icon show">
                  <i class="bi bi-lock"></i>
                </span>
                </label>
              </td>
            </tr>
            </tbody>
          </table>
        </BoardCard>
      </div>
    </div>
  </section>
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
  </section>
  <Typing :text="typingText" :typingSpeed="50"/>
</template>

<script setup>
import BoardCard from "@/components/TheMainCard.vue";
import {useRouter} from 'vue-router';
import { onMounted, reactive, ref} from "vue";
import {isCreatedWithin7Days} from "@/common/dateUtils.js"
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import TheModal from "@/components/TheModal.vue";
import {getMainData} from "@/api/common.js";
import ChatButton from "@/components/ChatButton.vue";
import Typing from "@/components/Typing.vue";


const BASE_URL = process.env.VITE_APP_API_URL;
const authStore = useAuthStore();
const {userName, getAuthorities} = storeToRefs(authStore);
const show = ref(false);
const AUTHORITY = getAuthorities.value;
const router = useRouter();
const modalText = ref('')

const boards = reactive({});
const notices = reactive({});
const galleries = reactive({});
const helps = reactive({});
const activities = reactive([
  { type: '달리기', gifUrl: './public/running.gif', data: 5, unit: 'km' },
  { type: '자전거', gifUrl: './public/cycling.gif', data: 20, unit: 'km' },
  { type: '공부', gifUrl: './public/studying.gif', data: 3, unit: '시간' }
]);

onMounted(async () => {
  const res =await getMainData();
  Object.assign(boards, res.data.resultData.boards)
  Object.assign(notices, res.data.resultData.notices)
  Object.assign(galleries, res.data.resultData.galleries)
  Object.assign(helps, res.data.resultData.helps)
  Object.assign(records, res.data.resultData.helps)
})

const readHelpHandler = (writer, hno, isSecret) => {
  if (userName.value === null) {
    modalText.value = '로그인한 사용자만 조회할 수 있습니다.'
    show.value = true;
    return;
  }

  if (isSecret === 0 || AUTHORITY === 'ADMIN') {
    router.push({name: 'HelpRead', params: {hno: Number(hno)}})
    return;
  }

  if (userName._value === writer) {
    router.push({name: 'HelpRead', params: {hno: Number(hno)}})
  } else {
    modalText.value = '비밀글은 작성한 사용자만 확인할 수 있습니다.'
    show.value = true
  }
}

const readGalleryHandler = (bno) => {
  if (userName.value === null) {
    modalText.value = '로그인한 사용자만 조회할 수 있습니다.'
    show.value = true;
    return;
  }

  router.push({name: 'GalleryRead', params: {bno: Number(bno)}})
}

// 모달 로직
const doLoginHandler = () => {
  router.push({name: 'Login'});
}

const closeModal = () => {
  show.value = false;
}

const typingText = ref('Hey there.\nPleased to meet you 👋');


</script>

<style scoped>
.activity-display {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.activity-container {
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.gif-container {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.activity-gif {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.activity-info {
  flex-grow: 1;
  padding: 15px;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1.2em;
  color: #333;
}

p {
  margin: 0;
  font-size: 1.1em;
  color: #666;
}
img {
  width: 64px;
  height: 64px;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>