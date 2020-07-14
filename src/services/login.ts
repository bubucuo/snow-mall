import request from '@/utils/request';

export interface LoginParams {
  name: string;
  password: string;
}

export async function fakeAccountLogin(params: LoginParams) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}
