import React from 'react';
import { Card, Checkbox, Stepper } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { CartProductType } from '@/@types/product';

export interface UpdateProductType {
  id: string;
  index: number;
  count?: number;
  checked?: boolean;
}

interface ListProps {
  data: CartProductType[];
  updateProduct: (newState: UpdateProductType) => void;
}

const List: React.FC<ListProps> = ({ data, updateProduct }) => {
  return (
    <Card full className={styles.main}>
      {data.length === 0 ? (
        <div className="txtCenter">购物车为空，快去选购吧！</div>
      ) : (
        data.map((item: CartProductType, index: number) => (
          <Node
            key={item.id}
            index={index}
            {...item}
            updateProduct={updateProduct}
          />
        ))
      )}
    </Card>
  );
};

const CheckboxItem = Checkbox.CheckboxItem;

const Node = ({
  id,
  title,
  img,
  price,
  count,
  checked,
  index,
  updateProduct,
}: CartProductType & {
  updateProduct: (newState: UpdateProductType) => void;

  index: number;
}) => {
  return (
    <CheckboxItem
      onChange={() => updateProduct({ id, index, checked: !checked })}
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
              onChange={(count: number) => updateProduct({ id, index, count })}
            />
          </div>
        </div>
      </div>
    </CheckboxItem>
  );
};

export default List;
