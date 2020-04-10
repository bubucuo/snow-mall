import React, { useMemo, useState } from 'react';
import { WingBlank, Card, Button } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import PayModal from '@/components/PayModal';

interface IndexProps {
  totalPrice?: number;
  count?: number;
}

const PayBar: React.FC<IndexProps> = ({ totalPrice, count }) => {
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
