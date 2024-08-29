<template>
  <div class="bi-app" :class="{ 'disabled-editor': props.isDisabled }">
    <ckeditor :editor="editor"
              v-model="editorData"
              :config="editorConfig"
              :disabled="props.isDisabled"
              />
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import axios from "axios";
import {
  ClassicEditor,
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

const BASE_URL = process.env.VITE_APP_URL;

const props = defineProps({
  initEditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});
const appendFiles = ref([]);
const emit = defineEmits(["update:editorData"])
const editorData = ref(props.initEditorData || '');
const editor = ClassicEditor;
const editorConfig = {
  plugins: [Bold, Essentials, Italic, Paragraph, Undo, SimpleUploadAdapter, Image,
    ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageInsertUI,
    MediaEmbed, HtmlEmbed],
  extraPlugins: [CustomUploadAdapterPlugin],
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
  autogrow: {
    minHeight: '250px',
    maxHeight: '600px'
  }
};

watch(editorData, async () => {
  emit('update:editorData', editorData.value)
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

class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(file => new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('upload', file);
      data.append('fileName', file.name)
      data.append('fileType', file.type)
      data.append('fileSize', file.size)

      axios.post(`${BASE_URL}/board/api/files/editor/upload`, data)
          .then(response => {
            console.log('Server response:', response.data);

            const imageUrl = response.data.resultData;

            // URL이 상대 경로인 경우 전체 URL로 변환
            const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}/board/api/files/${imageUrl}`;

            appendFiles.value.push(response.data.resultData);

            resolve({
              default: fullImageUrl,
              alt: file.name
            });
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
    }));

  }

  abort() {
    // 업로드 중단 로직 (필요한 경우)
  }
}

function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader);
  };
}


onMounted((editorInstance)=>{
  if (props.isDisabled) {
    const editorElement = editorInstance.ui.getEditableElement();
    editorElement.style.border = 'none';
  }
})

</script>

<style scoped>
#app {
  width: 100%;
}

.disabled-editor :deep(.ck-editor__top) {
  display: none;
}

.disabled-editor :deep(.ck-editor__main) {
  border: none;
}

.disabled-editor :deep(.ck-editor__editable) {
  background: transparent !important;
  padding: 0 !important;
}

.disabled-editor :deep(.ck-editor__editable.ck-read-only) {
  border: none !important;
}
</style>
<style>
.ck-editor__editable_inline {
  min-height: 250px;
  max-height: 600px;
  overflow-y: hidden !important;
}

.ck-editor__editable_inline > :first-child {
  margin-top: 0;
}

.ck-editor__editable_inline > :last-child {
  margin-bottom: 0;
}
</style>