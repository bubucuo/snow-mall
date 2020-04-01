var Mock = require('mockjs');
import { Request, Response } from 'express';

function getProduct({ id }) {
  const phone = {
    title: '手机' + Mock.Random.ctitle(5, 50),
    imgs: [
      {
        src:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdegl69kmoj30gi0fqq9x.jpg',
        alt: '图片1',
      },
      {
        src:
          '//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg',
        alt: '图片2',
      },
      {
        src:
          'https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg',
        alt: '图片3',
      },
    ],
  };

  const newspaper = {
    title: '报纸' + Mock.Random.ctitle(5, 50),
    imgs: [
      {
        src:
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/53673/26/3253/319180/5d118889E0aa18b33/e9e83b343c21b9f0.jpg!q70.dpg.webp',
        alt: '图片2',
      },
      {
        src:
          '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/55261/29/13423/274282/5da340c1E1f0ddfd4/36967f8d08908ce7.jpg!q70.dpg.webp',
        alt: '图片2',
      },
      {
        src:
          '//m.360buyimg.com/mobilecms/s750x750_11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg!q80.dpg.webp',
        alt: '图片2',
      },
    ],
  };

  let res = {
    id: id + '',
    price: (Math.random() * 1000).toFixed(2),
    tags: [Mock.Random.ctitle(3, 6), Mock.Random.ctitle(3, 6)],
  };

  res =
    id % 2
      ? { ...res, ...newspaper }
      : {
          ...res,
          ...phone,
        };

  return res;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/product': (req: Request, res: Response) => {
    const { id } = req.body;
    const data = getProduct({ id });
    res.send({
      status: 'ok',
      data,
    });
  },
};
