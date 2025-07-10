export interface CartItem {
  productId: string;
  productImage: string;
  productTitle: string;
  productBrand: string;
  price: number;
  quantity: number;
  countInStock: number;
}

export interface CartState {
  cartItems: Record<string, CartItem[]>;
  getUserCart: () => CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export type CartItemsByUser = Record<string, CartItem[]>;

export interface CartStoreState {
  cartItems: CartItemsByUser;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getUserCart: () => CartItem[];
}
