import request from '@/utils/request';

export interface LoginParamsType {
  name: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}
