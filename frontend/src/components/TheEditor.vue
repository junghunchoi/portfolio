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


onMounted(() => {
  if (props.isDisabled) {
    const editorElement = document.querySelector('.ck-editor__editable');
    if (editorElement) {
      editorElement.style.border = 'none';
      editorElement.style.boxShadow = 'none';
    }
  }
});

</script>

<style>
.ck-editor__editable_inline {
  height: 600px !important; /* 기본 높이 설정 */
  max-height: 600px !important; /* 최대 높이 제한 */
  overflow-y: auto !important; /* 세로 스크롤 허용 */
}

/* 읽기 전용 모드일 때도 같은 크기 유지 */
.disabled-editor .ck-editor__editable_inline {
  height: 600px !important;
  max-height: 500px !important;
  overflow-y: auto !important;
}


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

/* 추가된 스타일 */
.disabled-editor :deep(.ck-widget) {
  outline: none !important;
}

.disabled-editor :deep(.ck-widget__type-around) {
  display: none !important;
}

.disabled-editor :deep(.ck-widget__resizer) {
  display: none !important;
}

.disabled-editor :deep(.image) {
  margin: 0 !important;
}

.disabled-editor :deep(.image img) {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.disabled-editor :deep(.ck-reset_all *) {
  all: revert;
}

</style>