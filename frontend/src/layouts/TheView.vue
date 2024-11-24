<template>
	<main>
		<div class="container py-4">
      <RouterView></RouterView>
		</div>
	</main>
  <TheFooter/>
</template>

<script setup>
import TheFooter from "@/layouts/TheFooter.vue";
</script>

<style lang="scss" scoped>
main{
  padding-top: 5rem;
  min-height: 100vh;
}

</style>