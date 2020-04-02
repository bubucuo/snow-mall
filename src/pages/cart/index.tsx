import React, { useEffect, useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import List from './List';
import Pay from './Pay';

// interface IndexProps extends ConnectProps {
//   dispatch: Dispatch;
//   search: object;
// }

// interface Event {}

// const Cart: React.FC<IndexProps> = ({ dispatch, cart }) => {
//   const [state, setState] = useState({
//     list: cart.list,
//     checkedAll: false,
//     totalPrice: 0,
//     count: 0,
//   });

//   const onChange = e => {
//     console.log('e----', e); //sy-log
//   };

//   useEffect(() => {
//     dispatch({
//       type: 'cart/query',
//     });
//   }, []);

//   useEffect(() => {
//     setState({
//       ...state,
//       list: cart.list,
//     });
//   }, [cart.list]);

//   useEffect(() => {
//     const { list } = state;
//     let checkedCount = 0;
//     let totalPrice = 0;
//     let count = 0;

//     list.map(item => {
//       item.checked && checkedCount++;
//       totalPrice += item.price;
//       count += item.count;
//     });
//     setState({
//       list,
//       checkedAll: checkedCount === list.length,
//       totalPrice,
//       count,
//     });
//   }, [state.list]);

//   console.log('cart', state); //sy-log

//   return (
//     <div className={styles.main}>
//       <List onChange={onChange} data={state.list} />
//       <Pay {...state} onChange={onChange} />
//     </div>
//   );
// };

export interface CartListItem {
  id: string;
  title: string;
  img: string;
  price: number;
  count: number;
  checked: boolean;
}

interface onChangeProps {
  id: string;
  count?: number;
  checked?: boolean;
}
export interface CartProps extends ConnectProps {
  dispatch: Dispatch;
  cart: {
    list: CartListItem[];
  };
}

export interface CartState {
  list: object[];
  checkedAll: boolean;
  totalPrice: number;
  count: number;
}

class Cart extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props);
    this.state = {
      list: [],
      checkedAll: false,
      totalPrice: 0,
      count: 0,
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'cart/query',
    });
  }

  compute = (list: CartListItem[]) => {
    let checkedCount = 0;
    let totalPrice = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
      let item = list[i];
      item.checked && checkedCount++;
      totalPrice += item.price;
      count += item.count;
    }
    return {
      list,
      checkedAll: checkedCount === list.length,
      totalPrice,
      count,
    };
  };

  getNewList = tar => {
    let newList = this.props.cart.list.concat([]);
    for (let i = 0; i < newList.length; i++) {
      let item = newList[i];
      if (typeof tar.id !== 'string') {
        item.checked = !tar.checked;
      }
      if (typeof tar.id === 'string' && tar.id === item.id) {
        newList[i] = { ...item, ...tar };
        break;
      }
    }
    return newList;
  };

  onChange = (tar: onChangeProps) => {
    const { dispatch } = this.props;
    let newList = this.getNewList(tar);
    dispatch({
      type: 'cart/editCart',
      payload: { list: newList },
    });
  };
  render() {
    const { list } = this.props.cart;
    const other = this.compute(list);
    return (
      <div className={styles.main}>
        <List onChange={this.onChange} list={list} />
        <Pay {...other} onChange={this.onChange} />
      </div>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({ cart }))(Cart);
