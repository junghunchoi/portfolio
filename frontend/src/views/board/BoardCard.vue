<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
      <router-link :to="destination">더보기+</router-link>
    </div>
    <div v-if="$slots.default" class="card-body">
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
  items :{Array, required:true}
});
</script>

<style scoped>

</style>