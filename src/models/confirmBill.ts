import { getDefaultReceivingInfo } from '@/services/confirmBill';
import { Effect, Reducer } from 'umi';

export interface ReceivingInfoState {
  name: string;
  tel: string;
  address: string;
}

export interface ConfirmBillModelState {
  receivingInfo: ReceivingInfoState;
}

export interface ConfirmBillModelType {
  namespace: 'confirmBill';
  state: ConfirmBillModelState;
  effects: {
    getDefaultReceivingInfo: Effect;
  };
  reducers: {
    saveInfo: Reducer<ConfirmBillModelState>;
  };
}

const Model: ConfirmBillModelType = {
  namespace: 'confirmBill',
  state: {
    receivingInfo: {
      name: '',
      tel: '',
      address: '',
    },
  },
  effects: {
    *getDefaultReceivingInfo(_, { call, put }) {
      const response = yield call(getDefaultReceivingInfo);
      yield put({
        type: 'saveInfo',
        payload: response,
      });
    },
  },
  reducers: {
    saveInfo(state, action) {
      return { ...state, receivingInfo: action.payload || {} };
    },
  },
};
export default Model;
