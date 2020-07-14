import request from '@/utils/request';

export interface QueryItem {
  id: string;
  increment?: number; //增加或者减少多少，如1是增加1个
  count?: number; //最新的数量
}

export async function editCart(params: QueryItem) {
  return request('/api/cart/edit', {
    method: 'POST',
    data: params,
  });
}
