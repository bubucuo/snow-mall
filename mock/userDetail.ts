var Mock = require('mockjs');
import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getUserDetail': {
    id: '0',
    name: '莎士比亚',
    icon:
      'https://avatar-static.segmentfault.com/382/084/3820841113-595af662a59a7_big64',
    email: 'shakespeare@kkb.com',
    signature: 'hello world',
    title: '买买买',
    tags: [
      {
        key: '0',
        label: '买',
      },
      {
        key: '1',
        label: '再买',
      },
      {
        key: '2',
        label: '接着买~',
      },
    ],
    country: 'China',
    address: '开课吧总部',
    phone: '0110-20204123',
  },
};
