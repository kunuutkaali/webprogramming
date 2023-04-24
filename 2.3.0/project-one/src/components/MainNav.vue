<template>
    <nav>
        <ul>
            <li @click="pageName">Page 1</li>
            <li @click="pageName">Page 2</li>
            <li @click="pageName">Page 3</li>
        </ul>
    </nav>
</template>

<script>
export default {
  methods: {
    pageName(e){
        console.log(e.target.firstChild.data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>