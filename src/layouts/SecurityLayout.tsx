import React from 'react';
import { Redirect, connect, Dispatch, Location, UserModelState } from 'umi';
import { ConnectState } from '@/models/connect';

interface SecurityLayoutProps {
  dispatch: Dispatch;
  location: Location;

  user: UserModelState;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  location,
  children,
  user,
}) => {
  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';
  console.log('isLogn', userid); //sy-log
  if (!isLogin) {
    return <Redirect to="login" />;
  }
  const { redirect = '/' } = location.state || {};

  return children; //<Redirect to={redirect} />; //children;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
