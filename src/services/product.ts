import request from '@/utils/request';

export interface QueryItem {
  id: string;
}

export async function query(params: QueryItem) {
  return request('/api/product', {
    method: 'POST',
    data: params,
  });
}
