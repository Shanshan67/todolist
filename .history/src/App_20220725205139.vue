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
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
export default {
    name: "App",
    components: { Navbar }
}
</script>

