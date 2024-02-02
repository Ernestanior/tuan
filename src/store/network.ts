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
export function goodList(params:any) {
  return request({
    method: 'get',
    url: '/good/list-by-merchant-id',
    params
  });
}
export function goodDetail(id:any) {
  return request({
    method: 'get',
    url: '/good/detail',
    params:{id}
  });
}


export function merchantList(data:any) {
  return request({
    method: 'post',
    url: '/merchant/page',
    data
  });
}
export function merchantDetail(id:any) {
  return request({
    method: 'get',
    url: '/merchant/detail',
    params:{id}
  });
}

export function fileUploadBase64(data:any) {
  return request({
    method: 'put',
    url: '/file/upload-base64',
    // headers: {
    //   'content-type': 'multipart/form-data',
    // },
    data
  });
}
