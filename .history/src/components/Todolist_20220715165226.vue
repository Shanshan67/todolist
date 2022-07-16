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
									@click="handleEdit(item.id)">
									Edit
								</button>
								<button 
									class="btn btn-info btn-sm mx-1"
									@click="handleEdit(item.id)">
									Delete
								</button>
							</td>
						</tr>
					</tbody>
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
		created() {
			Axios.get(todoUrl).then((response) => (this.todoList = response.data));
		}
	}
</script>