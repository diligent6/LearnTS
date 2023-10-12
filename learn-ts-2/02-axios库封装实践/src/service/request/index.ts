import axios from "axios";
import type {
  AxiosInstance,
 
} from "axios";

import type { YZRequestConfig } from "./type";
class YZRequest {
  //声明类的属性
  //构造方法里面用到的属性
  private instance: AxiosInstance;

  //构造方法 初始化类的属性 得到实例对象
  constructor(config: YZRequestConfig) {
    this.instance = axios.create(config);

    //拦截器的封装
    // 1.全局拦截器的封装----->所有的实例对象都会被拦截
    // 1.1 全局请求拦截 处于请求拦截的最后一层
    this.instance.interceptors.request.use((config) => {
      console.log("--------------全局请求拦截器---------------");
      return config;
    });

    //1.2 全局响应拦截器 处于响应请求拦截的第一层
    this.instance.interceptors.response.use((res) => {
      console.log("------------------全局响应拦截器--------------------");
      return res.data;
    });

    //2.  对应实例对象的拦截器配置 ---->拦截特定请求示例对象的请求和响应

    if (config.interCeptors) {
      //2.1 对应实例对象的请求拦截
      this.instance.interceptors.request.use(
        config.interCeptors?.requestFnSuccess as any,
        config.interCeptors.requestFnFailure
      );

      //2.2 对应实例对象的响应拦截
      this.instance.interceptors.response.use(
        config.interCeptors?.responseFnSuccess,
        config.interCeptors?.responseFnFailure
      );
    }
  }

  //封装对应的网络请求方法
  request<T>(config: YZRequestConfig<T>) {
    //拦截器函数本质就是一个回调函数 让外部的传入的函数获取一些特定参数值执行一些操作

    //这里主动调用 一次函数 不能注册到instance里面 不然就变为对象的了
    // 3. 特定请求的拦截器 对特定请求的请求和响应进行拦截

    //3.1 请求的拦截
    if (config?.interCeptors?.requestFnSuccess) {

     config = config.interCeptors.requestFnSuccess(config);
    }
    //3.2 响应的拦截
    return new Promise<T>((resolve, reject) => {

      this.instance.request<any,T>(config).then((res) => {
        if (config.interCeptors?.responseFnSuccess) {
            //回调外部的拦截函数 并给其res
           res = config.interCeptors.responseFnSuccess(res)
        }
        resolve(res)
      },err=>{
        reject(err)
      });
    });
  }

  get() {}
}

export default YZRequest;


type resolve=(v:any)=>any
type reject= (v:any)=>any
type exec =(resolve:resolve,reject:reject)=>void
type then =(resolve:resolve,reject?:reject)=>Test

class Test {
    private exc:exec
    
    public then:then

    constructor(exc:exec){
        this.exc = exc
        this.then = ()=>new Test(exc)
        this.exc((a)=>{
            console.log("first")
            this.then(a)
        },(err)=>{
            console.log("22")
        })
        
    }
    
    test(){
        this.exc((a)=>{
            console.log("first")
        },(err)=>{
            console.log("22")
        })
    }
}

new Test((resolve,reject)=>{

    resolve("aa")

    reject("bb")

}).then(resolve=>{

    console.log(resolve)
},reject=>{

})
