<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>

<style scoped>
</style>