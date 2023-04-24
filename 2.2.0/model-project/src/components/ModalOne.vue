<template>
  <div class='backdrop'>
      <div class='modal'>
          <h1>{{ header }}</h1>
          <p>
              <span v-if='iswelcome'>{{ text }}</span>
              <span v-else>Go Away!</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  props: [
      'header',
      'text',
      'iswelcome'
  ]
}
</script>

<style>
.modal {
  background: white;
  border-radius: 10px;
  padding: 2em;
  margin: 200px auto;
  width: 400px;
}
.backdrop {
  background: rgba(0,0,0,0.5);
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
}
.modal h1 {
  border: none;
  color: #060;
  font-family: 'Linux Libertine G', monospace;
  padding: 0;
}
</style>