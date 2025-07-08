import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IOrderShippingDetail } from '@/types/orderShipping.model';

interface IOrderState {
  orderShippingDetail: IOrderShippingDetail;
  currentStep: number;
  setOrderShippingDetail: (name: string, value: string) => void;
  resetOrderShipping: () => void;
}

export const useOrderStore = create<IOrderState>()(
  persist(
    (set) => ({
      orderShippingDetail: {
        address: '',
        city: '',
        country: '',
        postalCode: '',
        paymentMethod: 'pasargad',
      },
      currentStep: 2,
      setOrderShippingDetail: (name, value) =>
        set((state) => ({
          orderShippingDetail: {
            ...state.orderShippingDetail,
            [name]: value,
          },
        })),
      resetOrderShipping: () =>
        set({
          orderShippingDetail: {
            address: '',
            city: '',
            country: '',
            postalCode: '',
            paymentMethod: 'pasargad',
          },
          currentStep: 2,
        }),
    }),
    {
      name: 'order-shipping-storage',
    }
  )
);
