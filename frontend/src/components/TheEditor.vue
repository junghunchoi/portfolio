<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import { ClassicEditor,Base64UploadAdapter , Bold, Essentials, Italic, Paragraph, Undo, Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResize,
    ImageInsertUI,
  MediaEmbed, } from 'ckeditor5';
import CKEditor from '@ckeditor/ckeditor5-vue';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

export default {
  name: 'app',
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>Hello from CKEditor 5 in Vue!</p>',
      editorConfig: {
        plugins: [ Bold, Essentials, Italic, Paragraph, Undo,Base64UploadAdapter,Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          ImageResize,
          ImageInsertUI,
          MediaEmbed  ],
        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', 'imageUpload' ]
      }
    };
  }
};
</script>
