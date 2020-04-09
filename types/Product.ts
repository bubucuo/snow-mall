export interface ProductType {
  id: string;
  title: string;
  img: string;
  imgs?: any;
  price: number;
  count?: number;
  checked?: boolean;
  tags: [];
}

export interface ProductListType {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  data: Product[];
}
