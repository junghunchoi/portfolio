<template>
  <div class="bi-app">
    <ckeditor :editor="editor"
              v-model="editorData"
              :config="editorConfig"
              :disabled="props.isDisabled"></ckeditor>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue';
import {
  ClassicEditor,
  Base64UploadAdapter,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Undo,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
  ImageInsertUI,
  MediaEmbed,
  HtmlEmbed,
  SimpleUploadAdapter
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

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
const editorData = ref('');
const editorConfig = {
  plugins: [Bold, Essentials, Italic, Paragraph, Undo, SimpleUploadAdapter , Image,
    ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageInsertUI,
    MediaEmbed, HtmlEmbed],
  toolbar: ['undo', 'redo', '|', 'bold', 'italic', 'imageUpload', 'HtmlEmbed'],
  htmlEmbed: {
    icons: 'media',
    showPreviews: true,
    previewsInData: true,
    styles: {
      width: '100%',
      height: 'auto'
    }
  },
  simpleUpload:{
    uploadUrl: 'http://localhost:1541/'
  }
};

watch(editorDate, async () => {
  emit('update:editorData', editorDate.value)
})

watch(
    () => props.isDisabled,
    (newValue) => {
      if (newValue) {
        editorConfig.value = {toolbar: []};
      }
    },
    {immediate: true}
);

</script>

<style scoped>
#app {
  width: 100%;
}


</style>
<style>
.ck-editor__editable_inline {
  height: 250px;
  overflow-y: auto;
}
</style>