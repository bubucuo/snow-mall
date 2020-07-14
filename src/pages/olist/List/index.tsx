import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { CartProductType } from '@/@types/product';

interface ListProps {
  data: CartProductType[];
}

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <div className={styles.main}>
      {data.map(item => (
        <Node key={item.id} {...item} />
      ))}
    </div>
  );
};

const Node: React.FC<CartProductType> = ({ id, title, img, price, count }) => {
  return (
    <>
      <Card className={styles.node}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={classnames('twoRows')}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red', 'font14')}>￥{price}</p>
            <span className="font12">x {count}</span>
          </div>
        </div>
      </Card>
      <WhiteSpace size="lg" />
    </>
  );
};

export default List;
