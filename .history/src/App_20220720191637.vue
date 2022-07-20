<template>
  <v-app>
    <div>
      <HelloWorld/>
    </div>
    <div>
      <router-link to="/profile">Myprofile</router-link>
      <v-spacer></v-spacer>
      <router-link to="/todolist">Todolist</router-link>
    </div>
    <v-spacer></v-spacer>
    <v-content>
      <router-view/>
    </v-content>
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
