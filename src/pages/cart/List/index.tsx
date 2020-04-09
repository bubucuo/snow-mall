import React from 'react';
import { Checkbox } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import Counter from '@/components/Counter';
import { ProductList, Product } from 'types/Product';

const CheckboxItem = Checkbox.CheckboxItem;

interface NodeProps extends Product {
  key: string;
  onChange: Function;
}

const Node: React.FC<NodeProps> = ({
  id,
  title,
  img,
  price,
  count,
  checked,
  onChange,
}) => {
  return (
    <div>
      <CheckboxItem
        onChange={() => onChange({ id, checked: !checked })}
        checked={checked}
      >
        <div className={styles.node}>
          <div className={styles.imgBox}>
            <img src={img} alt={title} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{title}</div>
            <div className={styles.info}>
              <p className={classnames('red')}>￥{price}</p>
              <Counter
                value={count}
                onChange={(count: number) => onChange({ id, count })}
              />
            </div>
          </div>
        </div>
      </CheckboxItem>
    </div>
  );
};

interface IndexProps {
  onChange: Function;
  list: ProductList;
}

const List: React.FC<IndexProps> = ({ onChange, list = { data: [] } }) => {
  return (
    <div className={styles.main}>
      {list.data.map(item => (
        <Node key={item.id} {...item} onChange={onChange} />
      ))}
    </div>
  );
};

export default List;
