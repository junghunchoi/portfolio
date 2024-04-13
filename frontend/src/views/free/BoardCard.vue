<template>
  <div class="card">
    <div class="header">
      <div>{{title}}</div>
      <router-link :to="destination">더보기+</router-link>
      <hr/>
    </div>
    <slot></slot>

  </div>
</template>

<script setup>
defineProps({
  destination: {String, required: true},
  items :{Array, required:true},
  title: String,

});
</script>

<style scoped>

</style>