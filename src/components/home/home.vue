<template>
	<div>
		<h2>home</h2>
	</div>
</template>

<script>
	import  Vuex from "vuex";
	// import Home from '../../apis/home';
	export default {
		created(){
		
			 this.handleHomeData();
		},
		methods : {
			...Vuex.mapActions({
				handleHomeData : "home/handleHomeData"
			})
			
		}
	}
</script>

<style scoped>
</style>
