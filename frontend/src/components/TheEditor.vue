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
import axios from "axios";
// import CustomUploadAdapterPlugin from "@/common/CustomUploadAdapter";
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

const props = defineProps({
  initEeditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});
const appendFiles = ref([]);
const emit = defineEmits(["update:editorData"])
const editorDate = ref(props.initEeditorData || "");
const editor = ClassicEditor;
const editorData = ref('');
const editorConfig = {
  plugins: [Bold, Essentials, Italic, Paragraph, Undo, SimpleUploadAdapter , Image,
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

      axios.post('http://localhost:8072/board/api/files/editor/upload', data)
          .then(response => {
            console.log(response)
            appendFiles.value.push(response.data.resultData)
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

// 에디터가 준비되었을 때 호출되는 함수
const onReady = (editorInstance) => {
  editor.value = editorInstance;

  // 파일 업로드 완료 이벤트 리스너
  editor.value.plugins.get('FileRepository').on('uploadComplete', (evt, { data }) => {
    console.log('File upload complete:', data.url);
    // 여기서 추가적인 로직을 구현할 수 있습니다.
  });
};

// 에디터 내용이 변경되었을 때 호출되는 함수
const onEditorChange = (event, editorInstance) => {
  editorData.value = editorInstance.getData();
};


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