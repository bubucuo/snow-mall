import React from 'react';
import { history, Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { ProductType } from 'types/Product';

const CartAndBuy: React.FC<ProductType> = product => {
  return (
    <div className={styles.main}>
      <div className={classnames(styles.cart)}>
        <Link to="/cart">
          <span className="iconfont icon-3"></span>
          <p className={styles.title}>购物车</p>
        </Link>
      </div>
      <div
        className={classnames(styles.addCart, styles.btn)}
        onClick={() => history.push('/cart')}
      >
        加入购物车
      </div>
      <Link
        className={classnames(styles.buyNow, styles.btn)}
        to={{
          pathname: '/confirmBill',
          state: {
            totalPrice: product.price,
            count: 1,
            list: { data: [product] },
          },
        }}
      >
        立即购买
      </Link>
    </div>
  );
};

export default CartAndBuy;
