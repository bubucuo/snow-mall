import React, { PureComponent, Component } from 'react';
import { history } from 'umi';
import { TabBar } from 'antd-mobile';

const menu = [
  {
    key: 'home',
    title: '首页',
    link: '/',
    icon: 'shouye',
  },
  {
    key: 'cart',
    title: '购物车',
    link: '/cart',
    icon: '3',
  },
  {
    key: 'olist',
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
  },
  {
    key: 'user',
    title: '我的',
    link: '/user',
    icon: 'wode',
  },
];

interface BottomNavProps {
  pathname: string;
}

class BottomNav extends PureComponent<BottomNavProps> {
  componentWillUnmount() {
    console.log('BottomNav componentWillUnmount');
  }
  render() {
    const { children, pathname } = this.props;
    return (
      <TabBar tintColor="red">
        {menu.map(({ icon, title, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={'iconfont icon-' + icon} />}
            selectedIcon={<span className={'red iconfont icon-' + icon} />}
            selected={pathname === link}
            onPress={() => {
              history.push(link);
            }}
          ></TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

export default BottomNav;
