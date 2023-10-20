import request from './request';

export function wxLogin(data) {
  return request({
    method: 'post',
    url: '/user/wechat-login',
    data
  });
}

export function userBasic() {
  return request({
    method: 'get',
    url: '/user/basic'
  });
}
export function scriptList(data:any,signal?:any) {
  return request({
    method: 'post',
    url: '/script/page',
    data
  },signal);
}
export function scriptDetail(id:any,signal:any) {
  return request({
    method: 'get',
    url: '/script/find-by-id',
    params:{id}
  },signal);
}
