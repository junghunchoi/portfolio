<template>
  <div>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {ClassicEditor, Base64UploadAdapter } from 'ckeditor5'
// import CKEditor from '@ckeditor/ckeditor5-vue'

ClassicEditor
    .create( document.querySelector( '#editor' ), {
      plugins: [ Base64UploadAdapter, /* ... */ ],
      toolbar: [ /* ... */ ]
    } )
    .then( /* ... */ )
    .catch( /* ... */ );

// CKEditor 컴포넌트 등록
const ckeditor = CKEditor.component

// editor 인스턴스 정의
const editor = ClassicEditor

// 에디터 데이터를 저장할 ref 생성
const editorData = ref('')

// CKEditor 설정
const editorConfig = {
  // CKEditor 설정을 여기에 추가할 수 있습니다.
}

// 컴포넌트가 마운트되었을 때 실행될 함수
onMounted(() => {
  console.log('Editor is ready to use!')
})
</script>