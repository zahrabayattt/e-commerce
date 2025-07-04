import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
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
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (item) => {
        const existingItem = get().cartItems.find((i) => i.productId === item.productId);
        if (existingItem) {
          set({
            cartItems: get().cartItems.map((i) =>
              i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          });
        } else {
          set({ cartItems: [...get().cartItems, item] });
        }
      },
      removeFromCart: (productId) =>
        set({
          cartItems: get().cartItems.filter((item) => item.productId !== productId),
        }),
      updateQuantity: (productId, quantity) =>
        set({
          cartItems: get().cartItems.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        }),
        clearCart: () => set({cartItems: []}),
    }),
    {
      name: 'cart-storage', 
    }
  )
);
