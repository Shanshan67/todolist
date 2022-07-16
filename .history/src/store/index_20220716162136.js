import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

const todoUrl = "http://localhost:3000/todos";

const actions = {
	searchName(context,value){
		Axios.get(`${todoUrl}/${value}`).then(response => {
            context.commit('searchName', response.data);
			console.log(response.data)
        });
	}
}
	

const mutations = {
	searchName(state,data){
		state.users = data
	}
}

const state = {
	users:[]
}

export default new Vuex.Store({
	actions,
	mutations,
	state
})
