import React from 'react';
import classnames from 'classnames';
import styles from './index.less';
import { Card } from 'antd-mobile';

export interface ReceivingInfoType {
  name: string;
  tel: string;
  address: string;
}
const ReceivingInfo: React.FC<ReceivingInfoType> = ({ name, tel, address }) => {
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
