<template>
  <div class="card">
    <div class="header">
      <div>{{title}}</div>
      <router-link :to="destination">더보기+</router-link>
      <hr/>
    </div>
    <div  class="card-body">
      <div v-for = "item in items" :key = "item.num">
        <div>{{item.num}}</div>
        <div>{{item.category}}</div>
        <div>{{item.title}}</div>
        <div>{{item.isNew}}</div>
        <div>{{item.isLock}}</div>
      </div>
      <slot></slot>
    </div>
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