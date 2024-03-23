export interface Product {
  id: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
  avaliableQty: number;
}

export interface Orders {
  id: number;
  user: number;
  product: Product[];
  delivered: boolean;
}
