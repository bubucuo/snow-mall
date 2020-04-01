import request from '@/utils/request';

export interface QueryItem {
  id?: string;
  tag?: string;
}

export async function query(params: LoginParamsType) {
  return request('/api/search', {
    method: 'POST',
    data: params,
  });
}
