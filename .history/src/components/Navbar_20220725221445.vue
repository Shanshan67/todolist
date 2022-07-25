<template>
  <nav>

    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light" @click="drawer = !drawer">Todo</span>
        <span @click="drawer = !drawer">list</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <span>Sign Out</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <p class="white--text subheading mt-1">Shanshan</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile>
          <div>
            <router-link to="/profile">Myprofile</router-link>
          </div>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        //{ text: 'Dashboard', route: '/' },
        { text: 'TodoList', route: '/todolist' },
        //{ text: 'Myprofile', route: '/profile' },
      ]
    }
  }
}
</script>

<style>

</style>
