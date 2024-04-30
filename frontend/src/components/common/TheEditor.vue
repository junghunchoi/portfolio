<template>
  <div id="app" style="height: 300px;">
    <ckeditor :editor="editor"
              v-model="editorData"
              :config="editorConfig"
              :disabled="props.isDisabled"
   />
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {ref, watch} from "vue";

const props = defineProps({
  initEeditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:editorData"])
const editorData = ref(props.initEeditorData || "");
const editor = ClassicEditor;

const editorConfig = ref({
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
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  readOnly: props.isDisabled,
})

watch(editorData, async () => {
  emit('update:editorData', editorData.value)
})

watch(
    () => props.isDisabled,
    (newValue) => {
      editorConfig.value = { toolbar: [] };
    },
    { immediate: true }
);

</script>

<style scoped>
#app{
  width:100%;
}

</style>
ck-editor__editable_inline
<style>
.ck-editor__editable_inline{
  height: 250px;
  overflow-y: auto;
}
</style>