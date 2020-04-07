import React, { useState, useEffect } from 'react';
import { ConnectProps, connect, Dispatch, OListModelState } from 'umi';
import { ConnectState } from '@/models/connect';
import styles from './index.less';
import List from './List';
import { WingBlank, WhiteSpace } from 'antd-mobile';

export interface OListProps
  extends OListModelState,
    ConnectProps,
    ConnectState {
  dispatch: Dispatch;
}

const OList: React.FC<OListProps> = ({ dispatch, olist }) => {
  useEffect(() => {
    // 获取订单列表
    dispatch({
      type: 'olist/query',
    });
  }, []);

  return (
    <WingBlank className={styles.main}>
      <WhiteSpace size="lg" />
      <List {...olist} />
      <WhiteSpace size="lg" />
    </WingBlank>
  );
};

export default connect(({ olist }: ConnectState) => ({
  olist,
}))(OList);
