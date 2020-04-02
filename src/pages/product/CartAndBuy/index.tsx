import React from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';

const menu = [
  {
    key: 'home',
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    key: 'cart',
    title: '购物车',
    link: '/cart',
    icon: 'fenlei',
  },
  {
    key: 'olist',
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
  },
  {
    key: 'user',
    title: '我的淘宝',
    link: '/user',
    icon: 'wode',
  },
];

const CartAndBuy = () => {
  return (
    <div className={styles.main}>
      <div className={classnames(styles.cart)}>
        <Link to="/cart">
          <span className="iconfont icon-3"></span>
          <p className={styles.title}>购物车</p>
        </Link>
      </div>
      <div className={classnames(styles.addCart, styles.btn)}>加入购物车</div>
      <div className={classnames(styles.buyNow, styles.btn)}>立即购买</div>
    </div>
  );
};

export default CartAndBuy;
