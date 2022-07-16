import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Myprofile from '../components/Myprofile'
import Todolist from '../components/Todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
			path:'/profile',
			component:Myprofile
		},
		{
			path:'/todolist',
			component:Todolist
		}
  ]
})
