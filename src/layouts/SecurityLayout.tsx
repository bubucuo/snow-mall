import React, { ReactElement } from 'react';
import { Redirect, connect, UserModelState, ConnectProps } from 'umi';
import { ConnectState } from '@/models/connect';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({ children, user }) => {
  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';
  if (!isLogin) {
    return <Redirect to="login" />;
  }

  return children;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
