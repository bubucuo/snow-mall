var Mock = require('mockjs');
import { Request, Response } from 'express';
import { number } from 'prop-types';

function getOList() {
  let res = [];
  for (let i = 0; i < 11; i++) {
    res.push({
      id: i + '',
      title: i % 2 ? '手机' : '报纸' + Mock.Random.ctitle(5, 50),
      img:
        '//img10.360buyimg.com/mobilecms/11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg',
      // ...Mock.mock({
      //   'price|1-100': 100,
      // }),
      price: Mock.Random.integer(1, 10000),
      count: Mock.Random.integer(1, 3),
    });
  }

  return res;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getOList': {
    list: { data: getOList() },
  },
};
