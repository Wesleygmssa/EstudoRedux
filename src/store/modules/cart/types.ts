export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface CartItem {
  product: IProduct;
  quantity: number;
}
export interface CartState {
  items: CartItem[];
}
