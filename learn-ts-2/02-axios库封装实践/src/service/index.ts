
import { BASE_URL, TIME_OUT } from './config/config'
import YZRequest from './request'

const yzRequest1 = new YZRequest({
    baseURL:BASE_URL,
    timeout:TIME_OUT,
    interCeptors:{
        requestFnSuccess:(config)=>{

            console.log("-----------------请求对象的请求拦截---------------------")
            return config
        },
        responseFnSuccess:(res)=>{

            console.log("---------------请求对象的响应拦截---------------------")
            return res
        }
    }
})


export default yzRequest1