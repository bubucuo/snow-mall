import request from '@/utils/request';

export async function query(params: {
  pageNo: number;
  pageSize: number;
  seachKey?: string;
}) {
  return request('/api/search', {
    method: 'POST',
    data: params,
  });
}
