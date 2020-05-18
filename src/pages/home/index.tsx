import React, { useEffect } from 'react';
import styles from './index.less';
import SearchInput from './SearchInput';
import Carousel from './Carousel';
import NavTable from './NavTable';
import Arc from '@/components/Arc';
import Recommend from './Recommend';
import { Dispatch, HomeModelState, connect } from 'umi';
import { ConnectState } from '@/models/connect';

interface HomeProps {
  dispatch: Dispatch;
  home: HomeModelState;
}

const Home: React.FC<HomeProps> = ({ dispatch, home }) => {
  useEffect(() => {
    // 获取推荐模块
    dispatch({ type: 'home/queryRecommend' });
  }, []);
  return (
    <div className={styles.main}>
      <SearchInput />
      <Carousel />
      <Arc />
      <NavTable />
      <Recommend list={home.recommend.data} />
    </div>
  );
};

export default connect(({ home }: ConnectState) => ({ home }))(Home);
