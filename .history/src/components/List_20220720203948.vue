<template>
	<v-card class="mx-auto" max-width="600" tile>
      <v-list flat>
        <v-subheader>Details</v-subheader>
        <v-list-item v-for="(user, index) in users" :key="index">
			<v-list-item-content>
              <v-list-item-title v-text="user.description"></v-list-item-title>
            <v-list-item-content>
              <v-list-item-title v-text="user.currency"></v-list-item-title>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="user.currency"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:'List',
		computed:{
			...mapState([
				'users'
			])
		}
	}
</script>