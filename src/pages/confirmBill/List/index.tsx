import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { ProductList, Product } from '@/models/connect';

interface NodeProps extends Product {
  key: string;
  last: boolean;
}

const Node: React.FC<NodeProps> = ({ id, title, img, price, count, last }) => {
  return (
    <>
      <Card className={styles.node}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={classnames('font14')}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red')}>￥{price}</p>
            <span className="font12">x {count}</span>
          </div>
        </div>
      </Card>
      {!last && <WhiteSpace size="lg" />}
    </>
  );
};

interface IndexProps {
  list: ProductList;
}

const List: React.FC<IndexProps> = ({ list = { data: [] } }) => {
  const { data } = list;
  return (
    <div className={styles.main}>
      {data.map((item: Product, index: number) => (
        <Node key={item.id} {...item} last={index === list.data.length - 1} />
      ))}
    </div>
  );
};

export default List;
