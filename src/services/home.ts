import request from '@/utils/request';

export async function queryRecommend(): Promise<any> {
  return request('/api/getRecommend');
}
