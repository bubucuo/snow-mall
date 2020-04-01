import React from 'react';
import { history } from 'umi';
import { TabBar, Button, Flex, Icon } from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

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
    icon: 'fenlei',
  },
  {
    key: 'olist',
    title: '订单列表',
    link: '/olist',
    icon: 'icon-',
  },
  {
    key: 'user',
    title: '我的淘宝',
    link: '/user',
    icon: 'wode',
  },
];

const CartAndBuy = () => {
  const children = menu.map(item => (
    <TabBar.Item
      key={item.key}
      {...item}
      icon={<span className={'iconfont icon-' + item.icon} />}
      onPress={() => {
        history.push(item.link);
      }}
    />
  ));

  return (
    <Flex>
      <Flex.Item>
        <div className="am-tab-bar-tab">
          <div
            className="am-tab-bar-tab-icon"
            style={{ color: 'rgb(136, 136, 136) ' }}
          >
            <span className="iconfont icon-3"></span>
          </div>
          <p
            className="am-tab-bar-tab-title"
            style={{ color: 'rgb(136, 136, 136)' }}
          >
            购物车
          </p>
        </div>
        {/* <Icon type="3" />
        <Button type="primary">加入购物车</Button> */}
      </Flex.Item>
      <Flex.Item>
        <Button type="primary">加入购物车</Button>
      </Flex.Item>
      <Flex.Item>
        <Button type="primary">立即购买</Button>
      </Flex.Item>
    </Flex>

    /* <Tabs tabs={tabs}
      initialPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs> */
    // <TabBar>
    //   <TabBar.Item icon={<i className="iconfont icon-3"></i>} title="购物车" />
    //   {/* <TabBar.Item
    //     icon={<i className="iconfont icon-3"></i>}
    //     title="加入购物车"
    //     className={classnames(styles.addCart, styles.btn)}
    //   />

    //   <TabBar.Item
    //     icon={<i className="iconfont icon-3"></i>}
    //     title="立即购买"
    //     className={classnames(styles.buyNow, styles.btn)}
    //   /> */}
    //   <Button>aadd</Button>
    // </TabBar>
  );
};

export default CartAndBuy;
