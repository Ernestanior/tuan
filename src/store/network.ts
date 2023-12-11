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
export function goodList(data:any) {
  return request({
    method: 'post',
    url: '/good/page',
    data
  });
}
export function goodDetail(id:any) {
  return request({
    method: 'get',
    url: '/good/find-by-id',
    params:{id}
  });
}
