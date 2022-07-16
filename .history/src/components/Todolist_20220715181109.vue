<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<table class="table table-bordered mt-5">
					<thead>
						<tr>
							<th>TO DO</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in todoList" :key="i">
							<td class="align-middle w-75">
								{{item.name}}
							</td>
							<td class="align-middle text-center w-75">
								<button 
									class="btn btn-info btn-sm mx-1"
									@click="handleEdit(item.id)"
								>
									Edit
								</button>
								<button 
									class="btn btn-danger btn-sm mx-1"
									@click="handleDelete(item.id)"
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<td class="align-middle text-center w-75">
							<div class="form-group">
								<label for="">{{
									editMode ? "Edit" : "Add"
								}}</label>
								<input 
									type="text" 
									class="form-control" 
									v-model="todoItem.name"
								/>
							</div>
						</td>
						<td class="align-middle text-center w-25">
							<button 
								class="btn btn-primary btn-sm mx-1"
								@click="handleToDoItem">
								{{editMode ? "Edit" : "Add"}}
							</button>
							<button 
								v-if="editMode"
								class="btn btn-danger btn-sm mx-1"
								@click="handleCancel">
								Cancel
							</button>
						</td>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import Axios from "axios";
	const todoUrl = "http://localhost:3000/todos";
	export default {
		name:'Todolist',
		data() {
			return {
				todoList:[],
				todoItem:{},
				editMode:false
			}
		},
		methods: {
			handleEdite(id){
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
		},
		created() {
			Axios.get(todoUrl).then((response) => (this.todoList = response.data));
		}
	}
</script>