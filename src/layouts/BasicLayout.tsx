import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import { connect, Location, Dispatch } from 'umi';
import '@/static/iconfont/iconfont.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
  user: any;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, location, dispatch, user } = props;

  useEffect(() => {
    // 获取用户基本信息
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);

  const { pathname } = location;

  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(BasicLayout);
