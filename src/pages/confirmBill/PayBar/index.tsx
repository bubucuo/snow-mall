import React, { useState } from 'react';
import { Card, Button } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';
import PayModal from '@/components/PayModal';

interface PayBarProps {
  totalPrice?: number;
  count?: number;
}

const PayBar: React.FC<PayBarProps> = ({ totalPrice, count }) => {
  const [showPay, setShowPay] = useState<boolean>(false);
  const onOpenChange = () => {
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
