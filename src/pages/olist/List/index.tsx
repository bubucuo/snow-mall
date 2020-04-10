import React from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { ProductListType, ProductType } from 'types/Product';

interface NodeProps extends ProductType {
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
          <div className={classnames('twoRows')}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red', 'font14')}>￥{price}</p>
            <span className="font12">x {count}</span>
          </div>
        </div>
      </Card>
      {!last && <WhiteSpace size="lg" />}
    </>
  );
};

interface IndexProps {
  list: ProductListType;
}

const List: React.FC<IndexProps> = ({ list = { data: [] } }) => {
  return (
    <div className={styles.main}>
      {list.data.map((item, index) => (
        <Node key={item.id} {...item} last={index === list.data.length - 1} />
      ))}
    </div>
  );
};

export default List;
