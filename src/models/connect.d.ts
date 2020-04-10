import { HomeModelState } from './home';
import { ConfirmBillModelState } from './confirmBill';
import { CartModelState } from './cart';
import { SearchModelState } from './search';
import { UserModelState } from './user';
import { ProductModelState, OListModelState } from 'umi';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  home: HomeModelState;
  user: UserModelState;
  search: SearchModelState;
  cart: CartModelState;
  product: ProductModelState;
  confirmBill: ConfirmBillModelState;
  olist: OListModelState;
}

export interface Route {
  routes?: Route[];
}
