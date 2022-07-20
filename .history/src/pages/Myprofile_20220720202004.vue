<template>
	<v-app id="inspire">
		<List/>
		<Search/>
	</v-app>
</template>

<script>
	import Search from '../components/Search'
	import List from '../components/List'
	export default {
		name:'Myprofile',
		components:{Search,List}
	}
</script>