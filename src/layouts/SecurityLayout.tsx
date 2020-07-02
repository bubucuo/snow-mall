import React, { ReactElement } from 'react';
import { connect, Redirect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
  children: ReactElement;
}

const SecurityLayout: React.FC<SecurityLayoutProps> = ({
  user,
  children,
  location,
}) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登录 去登录页
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    );
  }
  return children;
};

export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
