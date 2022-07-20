<template>
  <v-app>
    
    <v-content>
      <router-link to="/profile">Myprofile</router-link>
      <router-link to="/todolist">Todolist</router-link>
    </v-content>
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
