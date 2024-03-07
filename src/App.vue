<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NavComponent></NavComponent>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
