import toast from 'react-hot-toast';
import { create } from 'zustand';

interface CartItem {
  productId: number;
  productTitle: string;
  productBrand: string;
  productImage: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingCartItems = state.cartItems.find((i) => i.productId === item.productId);
      if (existingCartItems) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      }
      toast.success('محصول به سبد کالا اضافه شد');
      return { cartItems: [...state.cartItems, item] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.productId !== productId),
    })),
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),
}));
