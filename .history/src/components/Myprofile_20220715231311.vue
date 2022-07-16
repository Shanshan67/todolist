<template>
	<div class="container">
		<List/>
		<Search/>
	</div>
</template>

<script>
	import Search from './Search'
	import List from './List'
	export default {
		name:'Myprofile',
		components:{Search,List}
	}
</script>