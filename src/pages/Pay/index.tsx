import {
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link, connect, Dispatch } from 'umi';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';

import styles from './index.less';

interface LoginProps {
  dispatch: Dispatch;
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

const Login: React.FC<LoginProps> = props => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [autoLogin, setAutoLogin] = useState(true);

  const handleSubmit = () => {
    let values = {};
    console.log('omg'); //sy-log
    const { dispatch } = props;
    dispatch({
      type: 'user/login',
      payload: { ...values },
    });
  };
  return (
    <div className={styles.main}>
      <button onClick={handleSubmit}>pay</button>
    </div>
  );
};

export default connect(({ user, loading }: ConnectState) => ({
  userLogin: user,
  // submitting: loading.effects['user/login'],
}))(Login);
