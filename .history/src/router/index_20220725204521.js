import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Myprofile from '../pages/Myprofile'
import Todolist from '../pages/Todolist'

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
