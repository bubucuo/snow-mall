import React, { useState, useEffect } from 'react';
import { ConnectProps, connect, Dispatch, ConfirmBillModelState } from 'umi';
import { ConnectState } from '@/models/connect';

import styles from './index.less';
import ReceivingInfo from './ReceivingInfo';

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

  console.log('hahs', location); //sy-log

  return (
    <div className={styles.main}>
      <ReceivingInfo {...receivingInfo} />
    </div>
  );
};

export default connect(({ confirmBill }: ConnectState) => ({
  confirmBill,
}))(ConfirmBill);
