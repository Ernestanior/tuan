//axios封装
import axios from 'axios';
import {getTokenSync, removeTokenSync,} from "./token";
import {Toast} from "@nutui/nutui-react-taro";
// export const image_url = 'http://43.134.172.92'
// export const init_url = 'http://43.134.172.92'
// export const init_url = 'https://api.friendasg.com/'
export const init_url = 'http://10.10.20.4:10000'

const request = (option: any,pass=false) => {
  return new Promise(async (resolve, reject) => {
    const instance = axios.create({
        baseURL: init_url,
        timeout: 10000,
    });
    //请求拦截
    instance.interceptors.request.use(
      async (config: any) => {
        // const token = await getToken();
        const token = getTokenSync()
        if (token){
            config.headers['oes-token'] = token;
        }
        return config;
      },
      (err: any) => {
        console.log(err);
      },
    );
    //响应拦截
    instance.interceptors.response.use(
      (config: any) => {
        return config;
      },
      (err: any) => {
          // Toast.show({type:'error',text1:'Server Error',text2:"Please contact developer for assistance\n"+err.message})
        reject(err);
      },
    );
    instance(option)
      .then(async(res: any) => {
          // console.log('response',res)
        if (res && res.status === 200) {
        //     useStore.getState().setLoading(false)
        //     //当需要使用error, code, msg时，打开pass直接获取整个数据
            if (pass){
                resolve(res.data)
                return
            }
            if (res.data.code === 401) {
                Toast.show('error',{title:'登录已过期'})
                removeTokenSync()
                reject(res.data.data);
            }
          if (res.data.code === 200) {
            // Toast.show({type:'success',text1:res.data.code+'',text2:res.data.msg})
            resolve(res.data.data);
          }
          else {
            reject(res.data);
            console.log('error code: ', res.data.code);
          }
        }
        else{

        }
      })
      .catch((err: any) => {
        reject(err);

      });
  }) as any;
};

export default request;
