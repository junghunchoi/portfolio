<template>
  <nav class="mt-5" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="$emit('page', currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
          v-for="page in visiblePages"
          :key="page"
          class="page-item"
          :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="$emit('page', page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="isNextPage">
        <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="$emit('page', currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});
defineEmits(["page"]);

const isPrevPage = computed(() => ({ disabled: !(props.currentPage > 1) }));
const isNextPage = computed(() => ({
  disabled: !(props.currentPage < props.pageCount),
}));

const visiblePages = computed(() => {
  const startPage = Math.floor((props.currentPage - 1) / 10) * 10 + 1;
  let endPage = startPage + 9;
  if (endPage > props.pageCount) {
    endPage = props.pageCount;
  }
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});
</script>

<style lang="scss" scoped></style>