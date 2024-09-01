<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:selectedCategory']);

const selectedCategory = ref(null);

const emitSelected = () => {
  emit('update:selectedCategory', selectedCategory.value);
};

onMounted(() => {
  if (props.categories.length > 0) {
    console.log(props.categories)
    selectedCategory.value = props.categories[0].id;
    emitSelected();
  }
});
</script>

<template>
  <select class="form-control" v-model="selectedCategory" @change="emitSelected">
    <option v-for="category in categories" :key="category.id" :value="category.id">
      {{ category.content }}
    </option>
  </select>
</template>

<style scoped>

</style>