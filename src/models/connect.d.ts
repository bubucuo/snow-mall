// model state 类型
import { UserModelState } from './user';
import { Location, Dispatch } from 'umi';
import { CartModelState } from './cart';

export interface ConnectProps {
  location: Location & { state: { from: string } };
  dispatch: Dispatch;
}

export interface ConnectState {
  user: UserModelState;
  cart: CartModelState;
}

export { UserModelState };
export { CartModelState };
