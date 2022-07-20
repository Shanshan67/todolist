<template>
	<div>
		<v-app >
    		<v-container class="grey lighten-5">
				<v-row class="mb-6" no-gutters>
					<v-col sm="6" md="5" lg="6">
          				<v-card class="pa-2" outlined tile>
							<v-input error disabled v-model="id">
								Enter the ID you search
    						</v-input></v-card>
					</v-col>
        			<v-col sm="6" md="5" offset-md="2" lg="6" offset-lg="0">
          				<v-card class="pa-2" outlined tile>
							<v-btn large
        						depressed
        						color="primary"
								@click="handleSearch">Search</v-btn>
          				</v-card>
        			</v-col>
				</v-row>
			</v-container>
  		</v-app>
	</div>
</template>
<script>
	export default {
		name:'Search',
		data() {
			return {
				id:""
			}
		},
		methods: {
			handleSearch(){
				this.$store.dispatch('searchName',this.id)
			}
		}
	}
</script>