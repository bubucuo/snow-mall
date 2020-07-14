import request from '@/utils/request';

export async function getDefaultReceivingInfo(): Promise<any> {
  return request('/api/getDefaultReceivingInfo');
}
