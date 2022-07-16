import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

const todoUrl = "http://localhost:3000/todos";
//准备actions——用于响应组件中的动作
const actions = {
	jiaOdd(context,value){
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},
	async handleSearch(context,name){
		Axios.get(todoUrl).then((response) => (this.todoList = response.data));
	}
//准备mutations——用于操作数据（state）
const mutations = {
	
}
//准备state——用于存储数据
const state = {
	users:[]
}
//准备getters——用于将state中的数据进行加工
const getters = {
	
}

export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
})


<script>
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