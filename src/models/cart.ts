import { Reducer } from 'umi';

export interface CartModelState {
  data: CartModelState[];
}

export interface CartModelType {
  namespace: 'cart';
  state: CartModelState;
  effects: {};
  reducers: {
    saveCart: Reducer<CartModelState>;
  };
}

const CartModel: CartModelType = {
  namespace: 'cart',
  state: {
    data: [],
  },
  effects: {},
  reducers: {
    saveCart(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default CartModel;
