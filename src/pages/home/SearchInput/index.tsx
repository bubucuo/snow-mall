import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default function SearchInput() {
  return (
    <section className={styles.main}>
      <Link className={styles.fakeInput} to="/search">
        <i className="iconfont icon-sousuo" /> 寻找宝贝
      </Link>
    </section>
  );
}
