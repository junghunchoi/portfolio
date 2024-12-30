<template>
  <div id="app" :class="{ 'disabled-editor': props.isDisabled }">
    <ckeditor :editor="editor"
              v-model="editorData"
              :config="computeEditorConfig"
              :disabled="props.isDisabled"
    />
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import { editor, editorConfig, uploadPath } from '@/common/editorConfig';
import 'ckeditor5/ckeditor5.css';

const props = defineProps({
  initEditorData: String,
  isDisabled: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(["update:editorData", "imageUploaded"])
const editorData = ref(props.initEditorData || '');

const computeEditorConfig = computed(()=>{
  return props.isDisabled
      ? { ...editorConfig, toolbar: [] }
      : editorConfig;
})



watch(uploadPath, async (newPath) => {
  if (newPath) {
    emit('imageUploaded', newPath);
  }
});

watch(editorData, async () => {
  emit('update:editorData', editorData.value)
})

watch(
    () => props.isDisabled,
    (newValue) => {
      if (newValue === true) {
        editorConfig.value = {toolbar: []};
      }
    },
    {immediate: true}
);

onMounted(() => {
  if (props.isDisabled === true) {
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
  height: 700px !important;
  max-height: 600px !important;
  overflow-y: auto !important;
}

.disabled-editor .ck-editor__editable_inline {
  min-height: 0 !important; /* 최소 높이 제거 */
  max-height: none !important; /* 최대 높이 제한 제거 */
  height: auto !important; /* 높이를 콘텐츠에 맞게 자동 조절 */
  overflow-y: visible !important; /* 스크롤 제거 */
}


#app {
  width: 90%;
  margin: 0 auto;
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

.ck-sticky-panel__content :deep(.ck-toolbar__items) {
  display: none !important;
}

.disabled-editor :deep(.ck-editor__top) {
  display: none !important;
}

</style>