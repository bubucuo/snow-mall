import { query } from '@/services/search';
import { Effect, Reducer } from 'umi';

export interface SearchModelState {
  list?: object[];
  // name?: string;
  // userid?: string;
  // tags?: {
  //   key: string;
  //   label: string;
  // }[];
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
    list: [],
  },
  effects: {
    *query(_, { call, put }) {
      const response = yield call(query);
      yield put({
        type: 'saveSearch',
        payload: response.data,
      });
    },
    // *fetchCurrent(_, { call, put }) {
    //   const response = yield call(queryCurrent);
    //   yield put({
    //     type: 'saveCurrentUser',
    //     payload: response,
    //   });
    // },
    // *login(_, { call, put }) {
    //   const response = yield call(fakeAccountLogin);
    //   yield put({
    //     type: 'saveCurrentUser',
    //     payload: response,
    //   });
    // },
  },
  reducers: {
    saveSearch(state, action) {
      return { ...state, list: action.payload || {} };
    },
    // changeNotifyCount(
    //   state = {
    //     currentUser: {},
    //   },
    //   action,
    // ) {
    //   return {
    //     ...state,
    //     currentUser: {
    //       ...state.currentUser,
    //       notifyCount: action.payload.totalCount,
    //       unreadCount: action.payload.unreadCount,
    //     },
    //   };
    // },
  },
};
export default Model;
