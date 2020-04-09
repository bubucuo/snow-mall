export interface Product {
  id: string;
  title: string;
  img: string;
  price: number;
  count?: number;
  checked?: boolean;
  tags: [];
}

export interface ProductList {
  pageNo: number;
  pageSize: number;
  totalPage: number;
  data: Product[];
}
