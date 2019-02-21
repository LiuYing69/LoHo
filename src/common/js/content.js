import $ from "jquery";
import Banner from "../../js/banner";
class Content{
	constructor(){
		
		this.init();
	}
	init(){
		$.ajax({
			type : "post",
			url : "/api/capi/product/qiuxie/open/homefirstv322",
			data : JSON.stringify({
				os : 3
			}),
			headers:{
			    "content-type":"application/json"
			},
			success : $.proxy(this.success)
		})
	}
	success(data){
		new Banner().getData(data);
	}
}
new Content();