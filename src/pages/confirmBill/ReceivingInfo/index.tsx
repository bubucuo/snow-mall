import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { ReceivingInfoState } from 'umi';
import { Card } from 'antd-mobile';

const ReceivingInfo: React.FC<ReceivingInfoState> = ({
  name,
  tel,
  address,
}) => {
  return (
    <Card className={styles.main}>
      <i
        className={classnames(
          styles.icon,
          'xyCenter',
          'iconfont icon-dizhi_huaban',
        )}
      ></i>
      <div>
        <span className="font14">{name}</span>
        <span className="font12">{tel}</span>
      </div>
      <div className="font12">{address}</div>
    </Card>
  );
};

export default ReceivingInfo;
