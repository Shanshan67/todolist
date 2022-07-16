import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Myprofile from '../components/Myprofile'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
			path:'/profile',
			component:Myprofile
		},
		{
			path:'/home',
			component:Home
		}
  ]
})
