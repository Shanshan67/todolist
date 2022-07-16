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
									placeholder="Enter the name you search"
									v-model="name"
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
				name:""
			}
		},
		methods: {
			handleSearch(){
				this.$store.dispatch('jiaOdd',this.name)
			}
		}
	}
</script>