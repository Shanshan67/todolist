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
					<tbody v-for="user in users" :key="user.id">
						<tr>
							{{user.server_id}}
						</tr>
                        <tr>
							{{user.description}}
						</tr>
                        <tr>
							{{user.currency}}
						</tr>
                        <tr>
							{{user.type}}
						</tr>
                        <tr>
							{{user.digits}}
						</tr>
                        <tr>
							{{user.trade}}
						</tr>
                        <tr>
							{{user.swap_long}}
						</tr>
                        <tr>
							{{user.swap_short}}
						</tr>
                        <tr>
							{{user.contract_size}}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'List',
		computed:{
			users(){
				return this.$store.state.users
			}
		}
	}
</script>