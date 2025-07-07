import type { CartState } from '@/types/cart.model';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


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
