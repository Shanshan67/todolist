<template>
  <div id="app">
    <Dashboard/>
    <div>
      <router-link class="list-group-item" active-class="active" to="/profile">Myprofile</router-link>
      <router-link class="list-group-item" active-class="active" to="/todolist">Todolist</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue';
export default {
    name: "App",
    components: { Dashboard }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
