import type { CartState } from '@/types/cart.model';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (item) => {
        const existingItem = get().cartItems.find((i) => i.productId === item.productId);
        if (existingItem) {
          const totalQuantity = existingItem.quantity + item.quantity;
          if (totalQuantity > item.countInStock) {
            toast.error('موجودی کافی نیست');
            return;
          }
          set({
            cartItems: get().cartItems.map((i) =>
              i.productId === item.productId ? { ...i, quantity: totalQuantity } : i
            ),
          });
          toast.success('محصول با موفقیت به سبد خرید اضافه شد');
        } else {
          if (item.quantity > item.countInStock) {
            toast.error('موجودی کافی نیست');
            return;
          }
          set({ cartItems: [...get().cartItems, item] });
          toast.success('محصول با موفقیت به سبد خرید اضافه شد');
        }
      },
      removeFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter((item) => item.productId !== productId),
        }),
        toast.success("محصول  از سبد خرید حذف شد")
      },
      updateQuantity: (productId: string, quantity: number) => {
        const item = get().cartItems.find((i) => i.productId === productId);
        if (!item) return;
        if (quantity > item.countInStock) {
          toast.error('تعداد بیشتر از موجودی است');
          return;
        };
        set({
          cartItems: get().cartItems.map((i) =>
            i.productId === productId ? { ...i, quantity } : i
          ),
        });
        toast.success('تعداد محصول به‌روزرسانی شد');
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
