<template>
  <MainNav/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MainNav from './components/MainNav.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    HelloWorld
  },
  methods: {
    pageName(){

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
