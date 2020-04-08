import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Redirect, connect, Dispatch, Location, UserModelState } from 'umi';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';

import styles from './index.less';

interface LoginProps {
  dispatch: Dispatch;
  location: Location;
  user: UserModelState;
  userLogin: StateType;
  submitting?: boolean;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC<LoginProps> = ({ location, user, dispatch }) => {
  const handleSubmit = () => {
    let values = {};
    dispatch({
      type: 'user/login',
      payload: { ...values },
    });
  };

  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';
  console.log('isLogn', userid); //sy-log
  if (isLogin) {
    const { redirect = '/' } = location.state || {};

    return <Redirect to={redirect} />;
  }

  return (
    <div className={styles.main}>
      <button onClick={handleSubmit}>登录</button>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({
  user,
}))(Login);
