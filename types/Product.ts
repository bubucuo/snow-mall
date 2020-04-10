export interface ProductType {
  id: string;
  title: string;
  img: string;
  imgs?: any;
  price: number;
  count: number;
  checked?: boolean;
  tags: [];
}

export interface ProductListType {
  data: ProductType[];
}

export interface ProductListWithNumType extends ProductListType {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  searchKey: string;
}
