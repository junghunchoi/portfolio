<template>
  <div id="app">
    <ckeditor :editor="editor"
              v-model="editorDate"
              :config="editorConfig"
              :disabled="props.isDisabled"
    />
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {ref, watch, computed} from "vue";

const props = defineProps({
  initEeditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["update:editorData"])
const editorDate = ref(props.initEeditorData);
const editor = ClassicEditor;
const editorConfig = computed(() => ({
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      '|',
      'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo'
    ]
  },
  language: 'ko',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  height: '400px',
  readOnly: props.isDisabled
}));

watch(editorDate, async () => {
  emit('update:editorData', editorDate.value)
})
</script>

<style scoped>

</style>