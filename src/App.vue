<template>
  <div id="app">
    <div id="header">
      <router-link to="/">TODO</router-link>
    </div>
    <div id="container">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class App extends Vue {
}
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #header {
    margin-top: 5%;
    font-size: 60px;
  }

  a {
    color: #333e4c;
    text-decoration: none;
  }

  a:hover {
    color: #9370db;
    text-decoration-color: #9370db;
  }
</style>
