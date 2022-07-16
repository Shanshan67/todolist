<template>
  <div class="container">
    <div>
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

