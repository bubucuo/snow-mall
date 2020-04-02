import React from 'react';
import { Button, Checkbox } from 'antd-mobile';
import styles from './index.less';

const CheckboxItem = Checkbox.CheckboxItem;

interface IndexProps {
  totalPrice: number;
  count: number;
  checkedAll: boolean;
  onChange: Function;
}

const Pay: React.FC<IndexProps> = ({
  totalPrice,
  count,
  checkedAll,
  onChange,
}) => {
  return (
    <div className={styles.main}>
      <CheckboxItem onChange={onChange} checked={checkedAll}>
        全选
      </CheckboxItem>
      <span>
        合计: ￥ <span>{totalPrice.toFixed(2)}</span>
      </span>
      <Button type="primary" className={styles.btn}>
        去结算(<span>{count}</span>)
      </Button>
    </div>
  );
};

export default Pay;
