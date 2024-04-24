<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <div class="text-muted">문제가 발생했습니다!
      잠시후에 시도해주세요
    </div>
    <div class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">HOME</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
</script>

<style scoped>

</style>