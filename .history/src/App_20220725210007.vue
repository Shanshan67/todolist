<template>
  <v-app>
    
    <div>
      <router-link to="/profile">Myprofile</router-link>
      <v-spacer></v-spacer>
      <router-link to="/todolist">Todolist</router-link>
    </div>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
//import Dashboard from './pages/Dashboard.vue';
export default {
    name: "App",
    //components: { Dashboard }
}
</script>
