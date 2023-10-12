import yzRequest1 from ".."
import type { homeDataType } from "./type/homeType"

yzRequest1.request<homeDataType>({
    url:"/home/hotSuggests",
    interCeptors:{
        requestFnSuccess:(config)=>{
            console.log("-----------对应请求的请求拦截--------------")
            return config
        },
        responseFnSuccess:(res)=>{

            console.log("--------------------对应请求的响应拦截-------------------")
            

            return res
        }
    }
}).then(res=>{
    console.log(res)
})