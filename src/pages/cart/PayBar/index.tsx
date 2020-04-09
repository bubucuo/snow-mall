import React, { useMemo } from 'react';
import { Card, Checkbox } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { Link } from 'umi';
import { ProductListType } from 'types/Product';

const CheckboxItem = Checkbox.CheckboxItem;

interface IndexProps {
  list: ProductListType;
  totalPrice: number;
  count: number;
  checkedAll: boolean;
  onChange: Function;
}

const PayBar: React.FC<IndexProps> = ({
  list,
  totalPrice,
  count,
  checkedAll,
  onChange,
}) => {
  const getCheckedList = useMemo(() => {
    let newList: ProductListType = { data: [] };
    for (let i = 0; i < list.data.length; i++) {
      list.data[i].checked && newList.data.push(list.data[i]);
    }
    return newList;
  }, [list.data]);

  return (
    <Card full className={styles.main}>
      <CheckboxItem
        onChange={({ target }) => onChange({ ...target })}
        checked={checkedAll}
      >
        全选
      </CheckboxItem>
      <span>
        合计: ￥ <span>{totalPrice.toFixed(2)}</span>
      </span>
      <Link
        type="primary"
        className={classnames(styles.btn, !count && 'hidden')}
        to={{
          pathname: '/confirmBill',
          state: { totalPrice, count, list: getCheckedList },
        }}
      >
        去结算(<span>{count}</span>)
      </Link>
    </Card>
  );
};

export default PayBar;
