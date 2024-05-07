<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <div class="text-muted">문제가 발생했습니다!
    </div>
    <div class="text-muted">
      {{errorMsg}}
    </div>
    <div class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">HOME</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
const route = useRoute();
const errorMsg = computed(() => route.params.errorMsg);

console.log(errorMsg);
</script>

<style scoped>

</style>