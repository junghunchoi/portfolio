<script setup>
import { ref, onMounted, watch } from 'vue';
import { getCategoryList } from "@/api/common";

const props = defineProps({
  cno: Number
});
const categories = ref([]);
const emit = defineEmits(['update:selectedCategory']);

const selectedCategory = ref(null);

// cno prop이 변경될 때마다 해당하는 카테고리 찾아서 설정
watch(() => props.cno, (newCno) => {
  if (newCno && categories.value.length > 0) {
    const selected = categories.value.find(category => category.cno === newCno);
    if (selected) {
      selectedCategory.value = selected.cno;
      emit('update:selectedCategory', {
        cno: selected.cno,
        content: selected.content
      });
    }
  }
});

const emitSelected = () => {
  const selectedItem = categories.value.find(category => category.cno === selectedCategory.value);

  if (selectedItem) {
    emit('update:selectedCategory', {
      cno: selectedItem.cno,
      content: selectedItem.content
    });
  }
};

onMounted(async () => {
  const res = await getCategoryList();
  categories.value = res.data.resultData;

  // 초기 마운트 시 props.cno에 해당하는 카테고리 찾아서 설정
  if (props.cno) {
    const selected = categories.value.find(category => category.cno === props.cno);
    if (selected) {
      selectedCategory.value = selected.cno;
      emit('update:selectedCategory', {
        cno: selected.cno,
        content: selected.content
      });
    }
  }
});
</script>

<template>
  <select class="form-control" v-model="selectedCategory" @change="emitSelected">
    <option v-for="category in categories" :key="category.cno" :value="category.cno">
      {{ category.content }}
    </option>
  </select>
</template>

<style scoped>

</style>