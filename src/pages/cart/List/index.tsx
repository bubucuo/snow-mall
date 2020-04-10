import React from 'react';
import { Card, Checkbox, Stepper } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { ProductListType, ProductType } from 'types/Product';

const CheckboxItem = Checkbox.CheckboxItem;

interface NodeProps extends ProductType {
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
    <CheckboxItem
      onChange={() => onChange({ id, checked: !checked })}
      checked={checked}
    >
      <div className={styles.node}>
        <div className={styles.imgBox}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.right}>
          <div className={'twoRows'}>{title}</div>
          <div className={styles.info}>
            <p className={classnames('red')}>￥{price}</p>
            <Stepper
              className={styles.stepper}
              showNumber
              max={999}
              min={0}
              value={count}
              onChange={(count: number) => onChange({ id, count })}
            />
          </div>
        </div>
      </div>
    </CheckboxItem>
  );
};

interface IndexProps {
  onChange: Function;
  list: ProductListType;
}

const List: React.FC<IndexProps> = ({ onChange, list = { data: [] } }) => {
  return (
    <Card full className={styles.main}>
      {list.data.map((item: ProductType) => (
        <Node key={item.id} {...item} onChange={onChange} />
      ))}
    </Card>
  );
};

export default List;
