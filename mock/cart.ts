var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';

function getList() {
  let res = [];
  for (let i = 0; i < Mock.Random.integer(1, 10); i++) {
    let obj = getProduct();
    res.push({
      id: i + '',
      title: obj.title,
      img: obj.imgs[0],
      price: (Math.random() * 1000).toFixed(2),
      count: Mock.Random.integer(1, 10),
      checked: !!(i % 2),
    });
  }

  return res;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getCart': {
    list: { data: getList() },
  },
};
