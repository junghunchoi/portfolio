<template>

</template>

<script setup>
import {useAuthStore} from "@/store/loginStore.js";

const AUTHORITY = useAuthStore().getAuthorities
</script>

<style scoped>

</style>