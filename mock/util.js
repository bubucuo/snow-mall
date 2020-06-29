var Mock = require('mockjs');
import { productList } from './const';

export function getProduct(index) {
  const res =
    index !== undefined
      ? productList[index]
      : productList[Mock.Random.integer(0, productList.length - 1)];
  //res.title += Mock.Random.ctitle(0, 12);
  return res;
}
