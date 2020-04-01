import React from 'react';
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
    title: '我的淘宝',
    link: '/user',
    icon: 'wode',
  },
];

// export default class BottomNav extends Component {
//   render() {
//     return (
//       <ul className="bottomNav">
//         {menu.map(item => (
//           <MenuItem key={item.key} {...item} />
//         ))}
//       </ul>
//     );
//   }
// }

// function MenuItem(props) {
//   return (
//     <li className="menuItem">
//       <span className={'iconfont icon-' + props.icon}></span>
//       <Link to={props.link}>{props.title}</Link>
//     </li>
//   );
// }

const BottomNav = () => {
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

  return <TabBar children={children} />;
};

export default BottomNav;
