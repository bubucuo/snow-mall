import {
  queryCurrent,
  query as queryUsers,
  queryDetail,
} from '@/services/user';
import { Effect, Reducer } from 'umi';
import { fakeAccountLogin } from '@/services/login';

export interface UserDetailModelState {
  name: string;
  icon?: string;
  email: string;
  phone: string;
  address: string;
  signature?: string;
  title?: string;
  tags?: {
    key: string;
    label: string;
  }[];
  country: string;
}

export interface UserModelState {
  name: string;
  userid: string;
  detail: UserDetailModelState;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    queryDetail: Effect;
    fetchCurrent: Effect;
    login: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: { detail: {} },
  effects: {
    *queryDetail(_, { call, put }) {
      const response = yield call(queryDetail);
      yield put({
        type: 'saveCurrentUser',
        payload: { detail: response },
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *login(_, { call, put }) {
      const response = yield call(fakeAccountLogin);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, ...action.payload };
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
export default UserModel;
