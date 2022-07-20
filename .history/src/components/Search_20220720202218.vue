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
							<v-btn
        						depressed
        						color="primary"
								@click="handleSearch">Search</v-btn>
						</td>
					</tfoot>
				</table>
			</div>
		</div>
	</div>

	<div>
		<v-app id="inspire">
    		<v-container class="grey lighten-5">
				<v-row class="mb-6" no-gutters>
					<v-col sm="5" md="6">
						<v-card class="pa-2" outlined tile>TO DO</v-card>
					</v-col>
					<v-col sm="5" offset-sm="2" md="6" offset-md="0">
          				<v-card class="pa-2" outlined tile>Actions</v-card>
        			</v-col>

					<v-col sm="5" md="6">
						<v-card class="pa-2" outlined tile
							v-for="(item, i) in todoList" :key="i">
							{{item.name}}</v-card>
					</v-col>
					<v-col sm="5" offset-sm="2" md="6" offset-md="0">
          				<v-card class="pa-2" outlined tile
						v-for="(item, i) in todoList" :key="i">
							<v-btn x-small
        							depressed
        							color="primary"
									@click="handleEdit(item.id)">Edit</v-btn>
      		 				<v-btn x-small
        							depressed
        							color="error"
									@click="handleDelete(item.id)">Delete</v-btn></v-card>
        			</v-col>
					<v-col sm="6" md="5" lg="6">
          				<v-card class="pa-2" outlined tile>
							<v-input error disabled v-model="todoItem.name">
								Input
    						</v-input></v-card>
					</v-col>
        			<v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          				<v-card class="pa-2" outlined tile>
							<v-btn large
        						depressed
        						color="primary"
								@click="handleToDoItem">{{ editMode ? "Edit" : "Add" }}</v-btn>
							<v-btn large
								v-if="editMode"
        						depressed
        						color="error"
								@click="handleCancel">Cancel</v-btn>
          				</v-card>
        			</v-col>
				</v-row>
			</v-container>
  		</v-app>
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