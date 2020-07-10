import React, { useCallback } from 'react';
import { history } from 'umi';
import {
  Drawer,
  Card,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

interface PayModalProps {
  showPay: boolean;
  onOpenChange: () => void;
}

const PayModal: React.FC<PayModalProps> = ({ showPay, onOpenChange }) => {
  const pay = useCallback(() => {
    // 模拟支付
    setTimeout(() => {
      Toast.success('支付成功！', 2);
      onOpenChange();
      setTimeout(() => {
        history.push('/olist');
      }, 2000);
    }, 1000);
  }, []);

  const sidebar = (
    <Card>
      <Card.Header title="付款详情" />
      <Card.Body>
        <InputItem type="phone" placeholder="请输入手机号" clear />
        <div className={classnames(styles.auth, 'xyCenter')}>
          <InputItem
            type="number"
            maxLength={6}
            placeholder="请输入6位验证码"
            clear
          />
          <Button className={styles.authBtn}>发送验证码</Button>
        </div>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={pay}>
          立即付款
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <Drawer
      className={styles.main}
      position="bottom"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{
        color: '#A6A6A6',
        textAlign: 'center',
        paddingTop: 42,
      }}
      sidebar={sidebar}
      open={showPay}
      onOpenChange={onOpenChange}
      children={<div></div>}
    ></Drawer>
  );
};

export default PayModal;
