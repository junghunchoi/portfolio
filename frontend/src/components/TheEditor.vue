<template>
  <div id="app" style="height: 300px;">
    <ckeditor :editor="editor"
              v-model="editorDate"
              :config="editorConfig"
              :disabled="props.isDisabled"
    />
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import {ref, watch} from "vue";

const props = defineProps({
  initEeditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:editorData"])
const editorDate = ref(props.initEeditorData || "");
const editor = ClassicEditor;

const editorConfig = ref({
  toolbar: {
    items: ['undo', 'redo', '|', 'heading', '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'underline', 'strikethrough', 'code', '|', 'specialCharacters', 'horizontalLine', 'link', 'insertImage', 'mediaEmbed', 'insertTable', 'highlight', 'blockQuote', 'codeBlock', '|', 'bulletedList', 'numberedList', 'todoList', 'indent', 'outdent'],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  // plugins: [SimpleUploadAdapter],
  simpleUpload: {
    http: '//localhost:8080/api/v1/upload'
  },
  image: {
    toolbar: ['toggleImageCaption', 'imageTextAlternative', '|', 'imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight', '|', 'resizeImage'],
    styles: {options: ['alignBlockLeft', 'block', 'alignBlockRight']}
  },
  language: 'ko',
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {toggleDownloadable: {mode: 'manual', label: 'Downloadable', attributes: {download: 'file'}}}
  },

  editorDisabled: true
})

watch(editorDate, async () => {
  emit('update:editorData', editorDate.value)
})

watch(
    () => props.isDisabled,
    (newValue) => {
      if (newValue) {
        editorConfig.value = { toolbar: [] };
      }
    },
    { immediate: true }
);

</script>

<style scoped>
#app{
  width:100%;
}


</style>
<style>
.ck-editor__editable_inline{
  height: 250px;
  overflow-y: auto;
}
</style>