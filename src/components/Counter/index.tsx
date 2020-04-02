import React, { useState } from 'react';
import { TabBar, InputItem } from 'antd-mobile';
import styles from './index.less';

interface Props {
  value: number;
  onChange: Function;
}

const Counter: React.FC<Props> = ({ value, onChange }) => {
  const add = () => {
    onChange(value + 1);
  };
  const minus = () => {
    onChange(value - 1);
  };
  const change = e => {
    onChange(e.target.value);
  };
  return (
    <div className={styles.main}>
      <span className={styles.no} onClick={minus}>
        -
      </span>
      <input
        type="number"
        className={styles.input}
        value={value}
        onChange={change}
      />
      <span className={styles.no} onClick={add}>
        +
      </span>
    </div>
  );
};

export default Counter;
