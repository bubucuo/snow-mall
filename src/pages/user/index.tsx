import React, { useEffect } from 'react';
import { connect, UserModelState } from 'umi';
import { ConnectState, ConnectProps } from '@/models/connect';
import Header from './Header/';
import MyList from './MyList';
import Logout from './Logout/index';

interface UserProps extends ConnectProps {
  user: UserModelState;
}

const User: React.FC<UserProps> = ({ dispatch, user }) => {
  useEffect(() => {
    // dispatch

    dispatch({ type: 'user/queryDetail' });
  }, []);
  const { name, icon } = user.detail;
  const logout = () => {
    dispatch({ type: 'user/logout' });
  };
  return (
    <div>
      <Header name={name} icon={icon} />
      <MyList />
      <Logout logout={logout} />
    </div>
  );
};
export default connect(({ user }: ConnectState) => ({ user }))(User);
