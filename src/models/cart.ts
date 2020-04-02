import { query } from '@/services/cart';
import { Effect, Reducer } from 'umi';

export interface ModelState {
  checkedIds: string[];
  list?: object[];
}

export interface ModelType {
  namespace: 'cart';
  state: ModelState;
  effects: {
    query: Effect;
    editCart: Effect;
  };
  reducers: {
    saveCart: Reducer<ModelState>;
  };
}

const Model: ModelType = {
  namespace: 'cart',
  state: {
    checkedIds: [],
    list: [],
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
