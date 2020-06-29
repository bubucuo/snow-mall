var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';
import { productList } from './const';

interface getProductListProps {
  pageNo: number;
  pageSize: number;
  searchKey?: string;
  totalPage: number;
}

function getProductList({
  pageNo = 0,
  pageSize = 10,
  totalPage,
}: getProductListProps): {}[] {
  const getProductList = [];
  for (let i = 0; i < pageSize; i++) {
    let realIndex = pageNo * pageSize + i;
    if (realIndex > totalPage - 1) {
      break;
    }
    let obj = getProduct(realIndex);
    getProductList.push({
      id: realIndex, //i,
      title: obj.title,
      img: obj.imgs[0],
      tags: obj.tags,
      price: (Math.random() * 1000).toFixed(2),
      link: '',
    });
  }
  return getProductList;
}

function getProductListBySearch({
  pageNo = 0,
  pageSize = 10,
  searchKey = '',
  totalPage,
}: getProductListProps): {}[] {
  const getProductList = [];
  let i = 0; //遍历所有的下标
  let n = 0; //记录当前所有符合条件的数组的下标

  while (i < productList.length) {
    let obj = getProduct(i++);
    if (!!searchKey) {
      const refer = obj.catgory + obj.title + obj.tags.join('');
      // 不符合查询条件
      if (refer.indexOf(searchKey) === -1) {
        continue;
      }
    }

    // 如果符合 查看是否是当前页的元素

    // 上一页
    if (n < pageNo * pageSize) {
      n++;
      continue;
    }

    // 下一页了
    if (n >= (pageNo + 1) * pageSize) {
      break;
    }

    // 符合条件
    // 是否是当前页码

    getProductList.push({
      id: n,
      title: n + obj.title,
      img: obj.imgs[0],
      tags: obj.tags,
      price: (Math.random() * 1000).toFixed(2),
      link: '',
    });
    n++;
  }
  return getProductList;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/search': (req: Request, res: Response) => {
    const { pageNo, pageSize, searchKey } = req.body;
    const totalPage = productList.length;

    let listData;
    if (!!searchKey) {
      listData = getProductListBySearch({
        pageNo,
        pageSize,
        searchKey,
        totalPage,
      });
    } else {
      listData = getProductList({
        pageNo,
        pageSize,
        totalPage,
      });
    }

    res.send({
      status: 'ok',
      pageNo,
      pageSize,
      searchKey,
      data: listData,
      totalPage: !!searchKey ? null : totalPage,
    });
  },
};
