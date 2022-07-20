<template>
  <v-app>
    
    <v-toolbar app>
      <router-link to="/profile">Myprofile</router-link>
      <router-link to="/todolist">Todolist</router-link>
    </v-toolbar>
    <div>
      <router-view/>
    </div>
  </v-app>
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
