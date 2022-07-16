import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
	jiaOdd(context,value){
		console.log('actions中的jiaOdd被调用了')
		if(context.state.sum % 2){
			context.commit('JIA',value)
		}
	},

}
//准备mutations——用于操作数据（state）
const mutations = {
	
}
//准备state——用于存储数据
const state = {
	
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