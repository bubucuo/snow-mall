import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';
import homePage2 from '../../static/homePage2.png';
import Arc from '@/components/Arc';

export default () => {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />

      <img src={homePage2} />
    </div>
  );
};
