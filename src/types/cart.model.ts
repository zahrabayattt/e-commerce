export interface CartItem {
  productId: string;
  productTitle: string;
  productBrand: string;
  productImage: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void
}