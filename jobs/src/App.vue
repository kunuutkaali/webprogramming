<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact-us">Contact Us</router-link>
  </nav>
  <router-view/>
  <footer>
    @kkf 2023
  </footer>
</template>

<style>
body{
  padding:0;
  margin:0;
}
main{
  min-height: calc(100dvh - 150px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
footer{
  min-height: 50px;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
