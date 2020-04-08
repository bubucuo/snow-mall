import React, { useEffect } from 'react';
import { UserDetailModelState } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { Card, Flex, Button, WingBlank, WhiteSpace } from 'antd-mobile';

interface LogoutProps {
  logout: Function;
}

const Logout: React.FC<LogoutProps> = ({ logout }) => {
  return (
    <div className={styles.main}>
      <WingBlank size="lg">
        <Button type="primary" onClick={logout}>
          退出登录
        </Button>
      </WingBlank>
    </div>
  );
};

export default Logout;
