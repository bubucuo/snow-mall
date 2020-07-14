import React, { useEffect } from 'react';
import styles from './index.less';
import { Link } from 'umi';

const SeachInput = () => {
  return (
    <section className={styles.main}>
      <Link to="/search" className={styles.fakeInput}>
        <i className="iconfont icon-sousuo" /> 寻找宝贝
      </Link>
    </section>
  );
};
export default SeachInput;
