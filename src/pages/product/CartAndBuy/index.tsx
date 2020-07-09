import React, { useCallback } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { ProductType } from '@/@types/product';
import { Toast } from 'antd-mobile';

const CartAndBuy: React.FC<ProductType> = product => {
  const addToCart = useCallback(() => {
    Toast.success(product.title + '已加入购物车！');
  }, [product]);
  return (
    <div className={styles.main}>
      <Link to="/cart" className={classnames(styles.cart)}>
        <span className="iconfont icon-3 font16"></span>
        <p className={styles.title}>购物车</p>
      </Link>
      <div
        className={classnames(styles.addCart, styles.btn)}
        onClick={addToCart}
      >
        加入购物车
      </div>
      <Link to="/confirmBill" className={classnames(styles.buyNow, styles.btn)}>
        立即购买
      </Link>
    </div>
  );
};

export default CartAndBuy;
