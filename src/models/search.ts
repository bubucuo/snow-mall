import { ProductList } from './connect.d';
import { query } from '@/services/search';
import { Effect, Reducer } from 'umi';

export interface SearchModelState {
  list: ProductList;
}

export interface SearchModelType {
  namespace: 'search';
  state: SearchModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    saveSearch: Reducer<SearchModelState>;
  };
}

const Model: SearchModelType = {
  namespace: 'search',
  state: {
    list: {
      pageNo: 0,
      pageSize: 10,
      totalPage: 0,
      data: [],
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      if (!payload.pageSize) {
        payload.pageSize = 10; //默认是10
      }
      const response = yield call(query, payload);
      yield put({
        type: 'saveSearch',
        payload: response,
      });
    },
  },
  reducers: {
    saveSearch(state, action) {
      // 合并
      const { pageSize, pageNo, totalPage, data } = action.payload;
      let newData = [];
      if (pageNo === 0) {
        newData = data;
      } else {
        newData = [...state.list.data, ...data];
      }

      return {
        ...state,
        list: {
          pageSize,
          pageNo,
          totalPage,
          data: newData,
        },
      };
    },
  },
};
export default Model;
