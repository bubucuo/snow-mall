import { query } from '@/services/product';
import { Effect, Reducer } from 'umi';

export interface ProductModelState {
  id: string;
  price: number;
  titl: string;
  tags?: object[];
  imgs: string[];
}

export interface ProductModelType {
  namespace: 'product';
  state: ProductModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    saveProduct: Reducer<ProductModelState>;
  };
}

const Model: ProductModelType = {
  namespace: 'product',
  state: {},
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(query, payload);
      yield put({
        type: 'saveProduct',
        payload: response.data,
      });
    },
  },
  reducers: {
    saveProduct(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
};
export default Model;
