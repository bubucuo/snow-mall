import React, { useState, useEffect } from 'react';
import { ConnectProps, connect, Dispatch, ConfirmBillModelState } from 'umi';
import { ConnectState } from '@/models/connect';

import styles from './index.less';
import ReceivingInfo from './ReceivingInfo';
import List from './List';
import PayBar from './PayBar';
import { WingBlank, WhiteSpace } from 'antd-mobile';

export interface ConfirmBillProps
  extends ConfirmBillModelState,
    ConnectProps,
    ConnectState {
  dispatch: Dispatch;
}

const ConfirmBill: React.FC<ConfirmBillProps> = ({
  dispatch,
  confirmBill,
  location,
}) => {
  const { receivingInfo } = confirmBill;

  useEffect(() => {
    // 获取用户默认收货地址
    dispatch({
      type: 'confirmBill/getDefaultReceivingInfo',
    });
  }, []);

  return (
    <WingBlank className={styles.main}>
      <WhiteSpace size="lg" />
      <ReceivingInfo {...receivingInfo} />
      <WhiteSpace size="lg" />
      <List {...(location.state || {})} />
      <PayBar {...(location.state || {})} />
      <WhiteSpace size="lg" />
    </WingBlank>
  );
};

export default connect(({ confirmBill }: ConnectState) => ({
  confirmBill,
}))(ConfirmBill);
