import React, { useMemo, useState } from 'react';
import { WingBlank, Card, Button } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import { Link, useSelector } from 'umi';
import { ProductList } from '@/models/connect';
import PayModal from '@/components/PayModal';

interface IndexProps {
  list: ProductList;
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
  const [showPay, setShowPay] = useState(false);
  const onOpenChange = (): void => {
    setShowPay(!showPay);
  };
  return (
    <div className={styles.main}>
      <Card full className={styles.payBar}>
        <span>共 {count} 件</span>
        <span>
          合计: ￥ <span>{totalPrice && totalPrice.toFixed(2)}</span>
        </span>
        <Button
          type="primary"
          className={classnames(styles.btn)}
          onClick={onOpenChange}
        >
          去支付
        </Button>
      </Card>
      <PayModal showPay={showPay} onOpenChange={onOpenChange} />
    </div>
  );
};

export default PayBar;
