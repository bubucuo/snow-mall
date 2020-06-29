var Mock = require('mockjs');
import { getProduct } from './util';

function getOList() {
  let res = [];
  for (let i = 0; i < 11; i++) {
    let obj = getProduct();
    res.push({
      id: i + '',
      title: obj.title,
      img: obj.imgs[0],
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
