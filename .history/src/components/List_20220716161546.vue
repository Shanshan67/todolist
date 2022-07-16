<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<table class="table table-bordered mt-5">
					<thead>
						<tr>
							<th>Details</th>
						</tr>
					</thead>
					<h2 v-for="(user, index) in users" :key="index">
						
					</h2>
				</table>
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