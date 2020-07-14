var Mock = require('mockjs');
import { Request, Response } from 'express';
import { getProduct } from './util';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'POST /api/cart/edit': (req: Request, res: Response) => {
    const { id, count, increment } = req.body;
    res.send({
      status: 'ok',
    });
  },
};
