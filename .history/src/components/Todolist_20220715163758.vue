<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<table class="table table-bordered mt-5">
					<thead>
						<tr>
							<th>TO DO</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in todoList" :key="i">

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