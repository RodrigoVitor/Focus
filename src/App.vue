<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar,
  }
}
</script>

<style>
* {margin:0;padding:0}
div#main {height:700px}
div {background-color:#003}
</style>




