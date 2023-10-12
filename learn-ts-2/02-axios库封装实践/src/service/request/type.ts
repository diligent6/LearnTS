import type {
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
export interface InterCeptorConfig<T =AxiosResponse> {
  requestFnSuccess?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFnFailure?: (err: any) => any;
  responseFnSuccess?: (res: T) => T;
  responseFnFailure?: (err: any) => any;
}

export interface YZRequestConfig<T =AxiosResponse> extends AxiosRequestConfig {
  //拓展原来的配置类型，增加一个拦截器类型
  //用于拦截各个不同请求对象之间的请求和响应
  interCeptors?: InterCeptorConfig<T>;
}