<template>
	<v-app id="inspire">
		<v-container class="grey lighten-5">
			<List/>
			<Search/>
		</v-container>
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