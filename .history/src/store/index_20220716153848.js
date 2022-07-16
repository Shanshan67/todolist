import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

const todoUrl = "http://localhost:3000/todos";
//准备actions——用于响应组件中的动作
const actions = {
	searchName(context,value){
		axios.get(`${todoUrl}/${value}`).then(response => {
            context.commit('searchName', response.data);
        });
	}
}
	
//准备mutations——用于操作数据（state）
const mutations = {
	searchName(state,data){
		state.users = data
	}
}
//准备state——用于存储数据
const state = {
	users:[]
}

export default new Vuex.Store({
	actions,
	mutations,
	state
})
