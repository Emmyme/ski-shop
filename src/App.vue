<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <div>
      <nav >
        <RouterLink to="/BetalSida">BetalSida</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <Footer />
</template>

<script>
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>