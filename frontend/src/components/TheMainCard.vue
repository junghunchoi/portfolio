<template>
  <div class="card">
    <div class="header mt-1">
      <div>{{title}}
      <router-link class="float-end" :to="destination"><h4>+</h4></router-link>
      </div>
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