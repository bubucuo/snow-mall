export interface ProductType {
  img?: string;
  price: number;
  id: string;
  catgory?: string;
  title: string;
  imgs: string[];
  tags: string[];
}

export interface CartProductType extends ProductType {
  count: number;
  checked: boolean;
}
