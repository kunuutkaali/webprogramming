<template>
  <h1>{{ title }}</h1>
  <Modal :header="header" :text="text" :iswelcome="welcome"/>
</template>

<script>
import Modal from './components/ModalOne.vue';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'Our First Vue App - Yeehah',
      header: 'Sign up for the Giveaway!',
      text: 'Come in, the more the merrier ',
      welcome: true
    }
  }
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6rem;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 1rem;
}
</style>