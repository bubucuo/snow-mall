import { query } from '@/services/cart';
import { Effect, Reducer } from 'umi';
import { ProductListType } from 'types/Product';

export interface CartModelState {
  checkedIds: string[];
  list: ProductListType;
}

export interface CartModelType {
  namespace: 'cart';
  state: CartModelState;
  effects: {
    query: Effect;
    editCart: Effect;
  };
  reducers: {
    saveCart: Reducer<CartModelState>;
  };
}

const Model: CartModelType = {
  namespace: 'cart',
  state: {
    checkedIds: [],
    list: { data: [] },
  },
  effects: {
    *query(_, { call, put }) {
      const response = yield call(query);
      yield put({
        type: 'saveCart',
        payload: response,
      });
    },
    *editCart(_, { call, put }) {
      // const response = yield call(query);
      yield put({
        type: 'saveCart',
        payload: _.payload,
      });
    },
  },
  reducers: {
    saveCart(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
};
export default Model;
