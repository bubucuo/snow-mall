import { query } from '@/services/search';
import { Effect, Reducer } from 'umi';
import { ProductListType } from 'types/Product';

export interface SearchModelState {
  list: ProductListType;
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
      const { pageSize, totalPage, pageNo, data } = action.payload;

      let newData = [];
      if (pageNo === 0) {
        newData = data;
      } else {
        newData = [...state.list.data, ...data];
      }

      let newTotalPage = 0;
      if (!totalPage) {
        // 查询
        if (data.length < pageSize || data.length == 0) {
          newTotalPage = newData.length;
        } else {
          newTotalPage = 999999;
        }
      } else {
        newTotalPage = totalPage;
      }

      return {
        ...state,
        list: {
          ...action.payload,
          totalPage: newTotalPage,
          data: newData,
        },
      };
    },
  },
};
export default Model;
