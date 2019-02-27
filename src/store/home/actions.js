import Home from '../../apis/home';
import axios from 'axios';
export default{
	async handleHomeData({commit}){
		 let data =await Home.HomeData({})
			commit("handleHomeData",data);
		
	}
}