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
