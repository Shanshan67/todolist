<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<table class="table table-bordered mt-5">
					<tfoot>
						<td class="align-middle text-center w-75">
							<div class="form-group">
								<input 
									type="text" 
									class="form-control" 
									placeholder="Enter the ID you search"
									v-model="id"
								/>
							</div>
						</td>
						<td class="align-middle text-center w-75">
							<button 
								class="btn btn-primary btn-sm mx-1"
								@click="handleSearch"
							>
								Search
							</button>
						</td>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'Search',
		data() {
			return {
				id:""
			}
		},
		methods: {
			handleSearch(){
				this.$store.dispatch('searchName',this.id)
			}
		}
	}
</script>