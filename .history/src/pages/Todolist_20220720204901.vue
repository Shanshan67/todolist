<template>
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
							<input v-model="todoItem.name"/>
    					</v-card>
					</v-col>
        			<v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          				<v-card class="pa-2" outlined tile>
							<v-btn x-small
        						depressed
        						color="primary"
								@click="handleToDoItem">{{ editMode ? "Edit" : "Add" }}</v-btn>
							<v-btn x-small
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
		},
		created() {
			Axios.get(todoUrl).then((response) => (this.todoList = response.data));
		}
	}
</script>