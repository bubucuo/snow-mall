import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect, Dispatch } from 'umi';
import styles from './BasicLayout.less';
import BottomNav from '@/components/BottomMenu';
import { ConnectState } from '@/models/connect';
import '../static/iconfont/iconfont.css';

// import 'lib-flexible';
import '../static/flexible';

interface BasicLayoutProps {
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, children } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav />
      </footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
