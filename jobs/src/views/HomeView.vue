<template>
  <main class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Velkommen til vores super duper Vue app"/>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
