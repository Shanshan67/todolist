<template>
	<div class="container">
		<div class="row">
			<div class="col-12">

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
		}
	}
</script>