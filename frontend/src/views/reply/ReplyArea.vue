<template>
  <div class="row d-flex justify-content-center">
      <div class="card" style="background-color: #f0f2f5;">
        <div class="card-body p-4">
          <div class="card">
            <ul>
              <li v-for="reply in replyList" :key="reply.rno">
                <div class="reply_nick shadow-0">{{reply.replyer}}</div>
                <div class="reply_box">{{reply.replyText}}</div>
                <div class="reply_info">{{reply.regDate}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="form-outline">
      <input v-model="replyText"  type="text" id="addANote" class="form-control" placeholder="Type comment..." />
      <button class="btn btn-primary btn-sm" @click="registerReply">댓글등록</button>
  </div>

</template>

<script setup>
import {ref,defineEmits,defineProps} from 'vue';



const props = defineProps({
  replyList: Object,
  modelValue: String
})
const replyText = ref(props.modelValue);
const emit = defineEmits(['update:modelValue'])

const registerReply = () =>{
  emit('update:modelValue',replyText.value)
}


</script>

<style scoped>

</style>