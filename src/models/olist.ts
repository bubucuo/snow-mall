import { query } from '@/services/olist';
import { Effect, Reducer } from 'umi';
import { ProductList } from './connect';

export interface OListModelState {
  checkedIds: string[];
  list: ProductList;
}

export interface OListModelType {
  namespace: 'olist';
  state: OListModelState;
  effects: {
    query: Effect;
    editOList: Effect;
  };
  reducers: {
    saveOList: Reducer<OListModelState>;
  };
}

const Model: OListModelType = {
  namespace: 'olist',
  state: {
    checkedIds: [],
    list: { data: [] },
  },
  effects: {
    *query(_, { call, put }) {
      const response = yield call(query);
      yield put({
        type: 'saveOList',
        payload: response,
      });
    },
    *editOList(_, { call, put }) {
      // const response = yield call(query);
      yield put({
        type: 'saveOList',
        payload: _.payload,
      });
    },
  },
  reducers: {
    saveOList(state, action) {
      return { ...state, ...(action.payload || {}) };
    },
  },
};
export default Model;
