import React from 'react';
import { Redirect, connect } from 'umi';
import { ConnectState } from '@/models/connect';
import { UserModelState } from '@/models/user';

interface SecurityLayoutProps {
  user?: UserModelState;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = props => {
  const { children, user } = props;
  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';
  if (!isLogin) {
    return <Redirect to="login" />;
  }
  return children;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
