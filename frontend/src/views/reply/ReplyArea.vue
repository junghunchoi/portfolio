<template>
  <section>
    <div v-if="userName !==null">
    <div class="row d-flex justify-content-center">
      <div>
        <ul>
          <li v-for="(reply, index) in replyList" :key="reply.rno">
            <div class="reply_nick shadow-0"><b>{{
                reply.replyer
              }}</b>  {{
                reply.regDate
              }}
            </div>
            <div class="d-flex justify-content-between">
              <div class="reply_box">{{
                  reply.replyText
                }}
              </div>
              <div>
              <button v-if="userName === reply.replyer"
                      class="btn btn-danger btn-sm"
                      @click="deleteReplyHandler(reply.rno)">삭제
              </button>
              </div>
            </div>
            <hr v-if="replyList.length !== index+1"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="border  border-secondary-subtle border-1 rounded mt-4">
      <div class="my-2 ms-2">{{
          userName
        }}
      </div>
      <div class="d-flex">
    <textarea v-model="replyText" type="text" id="addReply" class="form-control"
              placeholder="댓글을 남겨보세요"/>
        <button class="btn btn-secondary btn-sm m-1 p-1 rbtn"
                @click="registerReplyHandler"
        >등록
        </button>
      </div>
    </div>
    </div>
    <div v-else>
      로그인한 사용자만 볼 수 있습니다
    </div>
  </section>
</template>

<script setup>
import {ref, defineProps} from 'vue';
import {useAuthStore} from "@/store/loginStore.js";
import {storeToRefs} from 'pinia'
import {deleteReply, registerReply} from "@/api/reply";

const authStore = useAuthStore();
const {userName} = storeToRefs(authStore);

const props = defineProps({
  bno: Number,
  replyList: Object,
  modelValue: String
})
const replyText = ref(props.replyText);
const emit = defineEmits(['update:replyText', 'replyDelete'])

const registerReplyHandler = async () => {
  // 댓글 내용 , 댓글단 사람
  const reply = {
    bno: props.bno,
    replyer: userName._value,
    replyText: replyText._value,
  }

  const res = await registerReply(reply)
  if (res.status !== 200) {
    console.log('댓글 등록에 실패했습니다.')
    return;
  }
  replyText.value = '';
  document.getElementById('addReply').textContent = '';
  emit('update:replyText', replyText.value)
}

const deleteReplyHandler = async (rno) => {
  const res = await deleteReply(rno)

  if (res.status !== 200) {
    console.log('댓글삭제에 실패했습니다. 잠시 후 확인해주세요.')
    return;
  }
  emit('replyDelete');
}


</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

textarea {
  display: block;
  width: 100%;
  min-height: 17px;
  padding-right: 1px;
  border: 0;
  font-size: 13px;
  -webkit-appearance: none;
  resize: none;
  box-sizing: border-box;
  background: transparent;
  outline: 0;
}

input:focus {
  outline: none;
}

textarea:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}

.rbtn {
  width: 70px;
}
</style>