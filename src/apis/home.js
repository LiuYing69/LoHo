import http from "../utils/http";

const HomeData=(params)=>http("get","/api/index",params);
export default{
	HomeData
}



// export const HomeData = (params)=>http("post","/api/capi/product/qiuxie/open/homefirstv322",params)