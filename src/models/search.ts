import { query } from '@/services/search';
import { Effect, Reducer } from 'umi';

export interface ModelState {
  list?: object[];
  // name?: string;
  // userid?: string;
  // tags?: {
  //   key: string;
  //   label: string;
  // }[];
}

export interface ModelType {
  namespace: 'search';
  state: ModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    saveSearch: Reducer<ModelState>;
  };
}

const Model: ModelType = {
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
