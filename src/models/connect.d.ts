import { ConfirmBillModelState } from './confirmBill';
import { CartModelState } from './cart';
import { SearchModelState } from './search';
import { MenuDataItem } from '@ant-design/pro-layout';
// import { GlobalModelState } from './global';
// import { DefaultSettings as SettingModelState } from '../../config/defaultSettings';
import { UserModelState } from './user';
// import { StateType } from './login';
import { ProductModelState, OListModelState } from 'umi';

// export { GlobalModelState, SettingModelState, UserModelState };

export interface Product {
  id: string;
  title: string;
  img: string;
  price: number;
  count?: number;
  checked?: boolean;
}

export interface ProductList {
  pageNo: number;
  pageSize: number;
  data: Product[];
}

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
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
  user: UserModelState;
  // login: StateType;
  search: SearchModelState;
  cart: CartModelState;
  product: ProductModelState;
  confirmBill: ConfirmBillModelState;
  olist: OListModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
