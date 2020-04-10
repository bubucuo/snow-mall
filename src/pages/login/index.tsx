import React from 'react';
import { Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { Redirect, connect, Dispatch, Location, UserModelState } from 'umi';
import { ConnectState } from '@/models/connect';

import styles from './index.less';

interface LoginProps {
  dispatch: Dispatch;
  location: Location;
  user: UserModelState;
  form: {
    getFieldProps: Function;
    validateFields: Function;
  };
}

// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(
  window.navigator.userAgent,
);
let moneyKeyboardWrapProps: Function;
if (isIPhone) {
  moneyKeyboardWrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const Login: React.FC<LoginProps> = ({ location, user, dispatch, form }) => {
  const handleSubmit = () => {
    form.validateFields((error, value) => {
      dispatch({
        type: 'user/login',
        payload: value,
      });
    });
  };

  const { userid } = user;
  const isLogin = userid !== null && userid !== undefined && userid !== '';

  if (isLogin) {
    const { redirect = '/' } = location.state || {};
    return <Redirect to={redirect} />;
  }

  const { getFieldProps } = form;

  return (
    <div className={styles.main}>
      <div className={styles.logo}></div>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <InputItem
          {...getFieldProps('name')}
          type="text"
          placeholder="请输入账号"
          clear
          moneyKeyboardAlign="left"
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          账号
        </InputItem>
        <InputItem
          {...getFieldProps('password')}
          type="password"
          placeholder="请输入密码"
          clear
          moneyKeyboardAlign="left"
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          密码
        </InputItem>
        <WhiteSpace size="lg" />

        <Button type="primary" onClick={handleSubmit}>
          登录
        </Button>
      </WingBlank>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({
  user,
}))(createForm()(Login));
