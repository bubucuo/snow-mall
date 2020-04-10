import React, { useEffect, useState } from 'react';
import { connect, Dispatch, CartModelState } from 'umi';
import { ConnectState } from '@/models/connect';
import styles from './index.less';
import List from './List';
import PayBar from './PayBar';
import { ProductListType, ProductType } from 'types/Product';

interface onChangeProps {
  id: string;
  count?: number;
  checked?: boolean;
}
export interface CartProps {
  dispatch: Dispatch;
  cart: CartModelState;
}

export interface CartPropsForChild {
  list: ProductListType;
  checkedAll: boolean;
  totalPrice: number;
  count: number;
}

class Cart extends React.Component<CartProps> {
  componentDidMount() {
    this.props.dispatch({
      type: 'cart/query',
    });
  }

  compute = (list: ProductListType): CartPropsForChild => {
    let checkedCount = 0;
    let totalPrice = 0;
    let count: number = 0;
    for (let i = 0; i < list.data.length; i++) {
      let item: ProductType = list.data[i];
      item.checked && checkedCount++;
      if (item.checked) {
        totalPrice += item.price * item.count;
        count += item.count;
      }
    }
    return {
      list,
      checkedAll: checkedCount === list.data.length,
      totalPrice,
      count,
    };
  };

  getNewList = (tar: onChangeProps): ProductListType => {
    let newList: ProductListType = { data: [] };
    newList.data = this.props.cart.list.data.concat([]);
    for (let i = 0; i < newList.data.length; i++) {
      let item = newList.data[i];
      if (typeof tar.id !== 'string') {
        item.checked = tar.checked;
      }
      if (typeof tar.id === 'string' && tar.id === item.id) {
        newList.data[i] = { ...item, ...tar };
        break;
      }
    }
    return newList;
  };

  onChange = (tar: onChangeProps): void => {
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
        <PayBar list={list} {...other} onChange={this.onChange} />
      </div>
    );
  }
}

export default connect(({ cart }: ConnectState) => ({
  cart,
}))(Cart);
