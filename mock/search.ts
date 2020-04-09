var Mock = require('mockjs');
import { Request, Response } from 'express';

function getProductList({ pageNo = 0, pageSize = 10, searchKey = '' }) {
  const getProductList = [];
  const catgory = ['手机', '报纸'];
  let productImg = [
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg',
    '//img11.360buyimg.com/n2/s370x370_jfs/t1/50238/3/3329/373862/5d118888Ebc20ea79/52977f9388dc1867.jpg!q70.jpg',
  ];
  for (let i = 0; i < pageSize; i++) {
    let realIndex = pageNo * pageSize + i;
    getProductList.push({
      id: realIndex, //i,
      img: productImg[i % 2],
      // img: Mock.Random.image('120x120'),
      title: searchKey + realIndex + catgory[i % 2] + Mock.Random.ctitle(5, 50),
      price: (Math.random() * 1000).toFixed(2),
      link: '',
      tags: [
        catgory[i % 2],
        Mock.Random.ctitle(3, 6),
        Mock.Random.ctitle(3, 6),
      ],
    });
  }
  return getProductList;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/search': (req: Request, res: Response) => {
    const { pageNo, pageSize, searchKey } = req.body;
    const listData = getProductList({ pageNo, pageSize, searchKey });
    res.send({
      status: 'ok',
      pageNo,
      pageSize,
      data: listData,
      totalPage: 45,
    });
  },
};
