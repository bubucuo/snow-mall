import { query } from '@/services/product';
import { Effect, Reducer } from 'umi';

export interface ModelState {
  id: string;
  price: number;
  titl: string;
  tags?: object[];
  imgs: string[];
}

export interface ModelType {
  namespace: 'product';
  state: ModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    saveProduct: Reducer<ModelState>;
  };
}

const Model: ModelType = {
  namespace: 'product',
  state: {},
  effects: {
    *query(_, { call, put }) {
      const response = yield call(query);
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
