<template>
	<TheHeader></TheHeader>
	<TheView></TheView>
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<style>
.app-container { /* 또는 #app, .layout 등 최상위 컨테이너 */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* 메인 컨텐츠가 남은 공간을 모두 차지하도록 */
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

a:hover {
  text-decoration: none !important;
  color: inherit !important;
}
</style>