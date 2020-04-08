import React, { useEffect } from 'react';
import { connect, Dispatch, UserModelState } from 'umi';
import { ConnectState } from '@/models/connect';
import styles from './index.less';
import Header from './Header';
import MyList from './MyList';
import Logout from './Logout';

interface UserProps {
  dispatch: Dispatch;
  user: UserModelState;
}

const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { detail } = user;

  const logout = () => {
    dispatch({
      type: 'user/logout',
    });
  };

  return (
    <div className={styles.main}>
      <Header {...detail} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({
  user,
}))(User);
