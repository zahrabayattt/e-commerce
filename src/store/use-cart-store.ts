import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';
import useAuthStore from './use-auth-store';
import type { CartItem, CartState } from '@/types/cart.model';

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      cartItems: {},

      getUserCart: () => {
        const userId = useAuthStore.getState().id;
        return userId ? get().cartItems[userId] || [] : [];
      },

      addToCart: (item: CartItem) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        const currentCart = get().cartItems[userId] || [];
        const existingItem = currentCart.find((i) => i.productId === item.productId);

        if (existingItem) {
          const totalQuantity = existingItem.quantity + item.quantity;
          if (totalQuantity > item.countInStock) {
            toast.error('موجودی کافی نیست');
            return;
          }

          const updatedCart = currentCart.map((i) =>
            i.productId === item.productId ? { ...i, quantity: totalQuantity } : i
          );

          set((state) => ({
            cartItems: { ...state.cartItems, [userId]: updatedCart },
          }));
        } else {
          if (item.quantity > item.countInStock) {
            toast.error('موجودی کافی نیست');
            return;
          }

          set((state) => ({
            cartItems: { ...state.cartItems, [userId]: [...currentCart, item] },
          }));
        }

        toast.success('محصول با موفقیت به سبد خرید اضافه شد');
      },

      removeFromCart: (productId: string) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        const currentCart = get().cartItems[userId] || [];
        const updatedCart = currentCart.filter((i) => i.productId !== productId);

        set((state) => ({
          cartItems: { ...state.cartItems, [userId]: updatedCart },
        }));

        toast.success('محصول از سبد خرید حذف شد');
      },

      updateQuantity: (productId: string, quantity: number) => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        const currentCart = get().cartItems[userId] || [];
        const item = currentCart.find((i) => i.productId === productId);
        if (!item) return;

        if (quantity > item.countInStock) {
          toast.error('تعداد بیشتر از موجودی است');
          return;
        }

        const updatedCart = currentCart.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        );

        set((state) => ({
          cartItems: { ...state.cartItems, [userId]: updatedCart },
        }));

        toast.success('تعداد محصول به‌روزرسانی شد');
      },

      clearCart: () => {
        const userId = useAuthStore.getState().id;
        if (!userId) return;

        set((state) => ({
          cartItems: { ...state.cartItems, [userId]: [] },
        }));
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
export const useUserCart = () => {
  const userId = useAuthStore((state) => state.id);
  return useCartStore((state) => (userId ? state.cartItems[userId] || [] : []));
};
