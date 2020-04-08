import { Toast } from 'antd-mobile';

import {
  queryCurrent,
  query as queryUsers,
  queryDetail,
  fakeAccountLogout,
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
  status?: 0 | 1;
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
    logout: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
    clearCurrentUser: Reducer<UserModelState> | {};
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
    *login({ payload }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if (response.status === 1) {
        yield put({
          type: 'saveCurrentUser',
          payload: response,
        });
      } else {
        Toast.fail(response.msg || '系统开小差，请稍后再试！', 1);
      }
    },
    *logout(_, { call, put }) {
      const response = yield call(fakeAccountLogout);
      yield put({
        type: 'clearCurrentUser',
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearCurrentUser(state, action) {
      return {};
    },
  },
};
export default UserModel;
