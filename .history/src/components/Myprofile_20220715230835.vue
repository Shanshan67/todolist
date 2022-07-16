<template>
	<div class="container">
		
	</div>
</template>

<script>
	import Axios from "axios";
	const todoUrl = "http://localhost:3000/todos";
	export default {
		name:'Myprofile',
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