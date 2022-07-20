<template>
  <v-app>
    
    <div>
      <router-link to="/profile">Myprofile</router-link>
      <router-link to="/todolist">Todolist</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Dashboard from './pages/Dashboard.vue';
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
