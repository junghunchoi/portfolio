<template>
  <section>
    <div class="container">
      <div class="row">
        <BoardCard class="col"
                   :title="'공지사항'"
                   :items="Mock"
                   :destination="'/notices'">

          <div>
            <table class="table">
              <thead>
              <tr>
                <th scope="col">제목</th>
              </tr>
              </thead>
              <tbody>
              <tr  v-for="notice in notices" :class="[notice.isMain === 1 ? 'bg-secondary' : '']">
                <td>
        <span v-if="notice.isMain === 1">
          [공지]
        </span>
                  <router-link :to="{ name: 'NoticeRead', params: { nno: notice.nno }}">{{
                      notice.title
                    }}
                  </router-link>
                  <span  v-if="isCreatedWithin7Days(notice.regDate)"><b>new</b></span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </BoardCard>
        <BoardCard class="col" :title="'자유게시판'"
                   :items="Mock"
                   :destination="'/boards'">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">제목</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="board in boards">

              <td>
                <router-link :to="{ name: 'BoardRead', params: { bno: board.bno }}">{{
                    board.title
                  }}
                </router-link>
                <span>[{{
                    board.replyCount
                  }}]</span>
                <span v-if="board.fileCount>=1" class="attachment-icon show">
                  <i class="fas fa-paperclip"></i>
                </span>
              </td>

            </tr>
            </tbody>
          </table>
        </BoardCard>
      </div>
    </div>
    <div class="row">
      <BoardCard class="col"
                 :title="'갤러리'"
                 :items="Mock"
                 :destination="'/galleries'">

        <div v-for="gallery in galleries" class="">
          <router-link :to="{ name: 'GalleryRead', params: { bno: gallery.bno }}">

            <div class="card">
              <img :src="'http://localhost:1541/api/files/' + gallery.fileName"  class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{gallery.title}}</h5>
            </div>
          </router-link>
        </div>
      </BoardCard>
      <BoardCard class="col"
                 :title="'문의게시판'"
                 :items="Mock"
                 :destination="'/helps'">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">제목</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="help in helps">
            <td>
              <router-link :to="{ name: 'HelpRead', params: { hno: help.hno }}">{{
                  help.title
                }}
              </router-link>
              <span v-if="help.answer">(답변완료)</span>
              <span v-else>(미답변)</span>
              <span  v-if="isCreatedWithin7Days(help.regDate)"><b>new</b></span>
              <span v-if="help.isSecret===1" class="attachment-icon show">
                  <i class="bi bi-lock"></i>
                </span>
            </td>
          </tr>
          </tbody>
        </table>
      </BoardCard>
    </div>

  </section>
</template>

<script setup>
import BoardCard from "@/views/free/BoardCard.vue";
import {useRouter} from 'vue-router';
import {inject, onMounted, reactive, ref} from "vue";
import {isCreatedWithin7Days} from "@/common/dateUtils"

const router = useRouter();
const $axios = inject('$axios');

const boards = reactive({});
const notices = reactive({});
const galleries = reactive({});
const helps = reactive({});

onMounted(async ()=>{
  const res = await $axios.get('/common/main')

  Object.assign(boards,res.data.resultData.boards )
  Object.assign(notices,res.data.resultData.notices )
  Object.assign(galleries,res.data.resultData.galleries )
  Object.assign(helps,res.data.resultData.helps )
})

const Mock = ref([
  {
    num: 1,
    category: '카테고리',
    title: '제목',
    isNew: true,
    isLcok: false,
  }, {
    num: 1,
    category: '카테고리',
    title: '제목',
    isNew: true,
    isLcok: false,
  }
])



</script>

<style scoped>

</style>