import React, { useEffect } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { Card, WingBlank } from 'antd-mobile';

const grids = [
  {
    icon: 'card',
    text: '待付款',
    to: '/olist',
  },
  {
    icon: 'daifahuo',
    text: '待发货',
    to: '/olist',
  },

  {
    icon: 'daishouhuo',
    text: '待收货',
    to: '/olist',
  },
  {
    icon: 'pingjia',
    text: '待付款',
    to: '/olist',
  },
];

const MyList = () => {
  return (
    <WingBlank size="lg" className={styles.main}>
      <Card full>
        <Card.Header
          title="我的订单"
          extra={<Link to="/olist">查看全部订单</Link>}
          className={classnames(styles.header, 'font12')}
        />

        <Card.Body>
          <div className={classnames(styles.grids, 'xyCenter ', 'font12')}>
            {grids.map((item, index) => (
              <Link key={'link' + index} to={item.to} className={styles.grid}>
                <i
                  className={classnames('font16 iconfont', 'icon-' + item.icon)}
                />
                <div>{item.text}</div>
              </Link>
            ))}
          </div>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default MyList;
