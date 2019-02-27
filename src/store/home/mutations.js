export default{
	handleHomeData(state,data){
		state.home.push(data.result);
		console.log(state.home)
	}
}