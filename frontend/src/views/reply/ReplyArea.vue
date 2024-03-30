<template>
  <div class="row d-flex justify-content-center">
    <div class="card" style="background-color: #f0f2f5;">
      <div class="card-body p-4">
        <div class="card">
          <ul>
            <li v-for="reply in replyList" :key="reply.rno">
              <div class="reply_nick shadow-0">{{ reply.replyer }}</div>
              <div class="reply_box">{{ reply.replyText }}</div>
              <div class="reply_info">{{ reply.regDate }}</div>
              <button v-if="userName === reply.replyer" class="btn btn-danger btn-sm"
                      @click="deleteReplyHandler(reply.rno)">댓글삭제
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="form-outline">
    <input v-model="replyText" type="text" id="addReply" class="form-control"
           placeholder="댓글 입력"/>
    <button class="btn btn-primary btn-sm" @click="registerReplyHandler">댓글등록</button>
  </div>

</template>

<script setup>
import {ref, defineProps} from 'vue';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {registerReply, deleteReply} from '@/api/reply'

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const props = defineProps({
  bno: Number,
  replyList: Object,
  modelValue: String
})
const replyText = ref(props.replyText);
const emit = defineEmits(['update:replyText','replyDelete'])

const registerReplyHandler = async () => {
  // 댓글 내용 , 댓글단 사람
  const data = {
    bno: props.bno,
    replyer: userName._value,
    replyText: replyText._value,
  }

  const res = await registerReply(data)
  if (res.status !== 200) {
    console.log('댓글 등록에 실패했습니다.')
    return;
  }
  replyText.value = '';
  document.getElementById('addReply').textContent = '';
  emit('update:replyText', replyText.value)
}
const deleteReplyHandler = async (rno) => {
  const res = await deleteReply(rno);

  if (res.status !== 200) {
    console.log('댓글삭제에 실패했습니다. 잠시 후 확인해주세요.')
  }
  emit('replyDelete');
}


</script>

<style scoped>

</style>