import { ProductListType } from 'types/ProductType';
import { queryRecommend } from '@/services/home';
import { Effect, Reducer } from 'umi';

export interface HomeModelState {
  recommend: ProductListType;
}

export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    queryRecommend: Effect;
  };
  reducers: {
    saveHome: Reducer<HomeModelState>;
  };
}

const Model: HomeModelType = {
  namespace: 'home',
  state: {
    recommend: { data: [] },
  },
  effects: {
    *queryRecommend(_, { call, put }) {
      const response = yield call(queryRecommend);
      yield put({
        type: 'saveHome',
        payload: { recommend: response.list },
      });
    },
  },
  reducers: {
    saveHome(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
export default Model;
