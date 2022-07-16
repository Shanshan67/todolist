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
									v-model="todoItem.name"
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
				todoList:[],
				todoItem:{},
				editMode:false
			}
		},
		methods: {
			handleEdit(id){
				this.editMode=true;
				this.todoItem=this.todoList.find((item) => item.id == id);
			},
			handleCancel() {
				this.editMode=false;
				this.todoItem="";
			},
			async handleToDoItem(){
				const id=this.todoItem.id;
				if(this.editMode){
					await Axios.put(`${todoUrl}/${id}`, this.todoItem);
					this.editMode=false;
					this.todoItem.name="";
				}else{
					await Axios.post(todoUrl, this.todoItem);
					this.todoItem.name = "";
				}
				Axios.get(todoUrl).then((response) => (this.todoList = response.data));
			},
			async handleDelete(id) {
				await Axios.delete(`${todoUrl}/${id}`);
				Axios.get(todoUrl).then((response) => (this.todoList = response.data));
			}
		}
	}
</script>