<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1>Details</h1>
				<h2 v-for="(user, index) in users" :key="index">
					{{user.description}}
					{{user.currency}}
					{{user.type}}
				</h2>
			</div>
		</div>
	</div>
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