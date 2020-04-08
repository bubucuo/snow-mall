import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect, Dispatch, Location, UserModelState, Redirect } from 'umi';
import styles from './BasicLayout.less';
import BottomNav from '@/components/BottomMenu';
import { ConnectState } from '@/models/connect';
import '../static/iconfont/iconfont.css';

// import 'lib-flexible';
import '../static/flexible';

interface BasicLayoutProps {
  dispatch: Dispatch;
  location: Location;
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, children, location, user } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';
  const { pathname } = location;

  if (!isLogin && pathname !== '/login') {
    return (
      <Redirect to={{ pathname: '/login', state: { redirect: pathname } }} />
    );
  }

  const showBottomNav = pathname !== '/product' && pathname !== '/login';

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
