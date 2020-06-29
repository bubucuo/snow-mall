import { Effect, Reducer } from 'umi';
import { queryCurrent } from '@/services/user';

interface CurrentUser {
  name?: string;
  icon?: string;
  userid?: string;
}

export interface UserModelState {
  currentUser: CurrentUser;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchCurrent: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<UserModelState>;
  };
}

const UserModel: UserModelType = {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({ type: 'saveCurrentUser', payload: response });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: { ...action.payload } || {} };
    },
  },
};
export default UserModel;
