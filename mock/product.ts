var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';

function getNowProduct({ id }: { id: string }) {
  let product = getProduct(id);
  let res = {
    id: id + '',
    price: (Math.random() * 1000).toFixed(2),
    title: product.title,
    tags: product.tags,
    imgs: product.imgs,
  };

  return res;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/product': (req: Request, res: Response) => {
    const { id } = req.body;
    const data = getNowProduct({ id });
    res.send({
      status: 'ok',
      data,
    });
  },
};
