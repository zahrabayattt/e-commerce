import { create } from 'zustand';
import type { IOrderShippingDetail } from '@/types/orderShipping';

interface IOrderState {
  orderShippingDetail: IOrderShippingDetail;
  setOrderShippingDetail: (name: string, value: string) => void;
  resetOrderShipping: () => void;
}

export const useOrderStore = create<IOrderState>((set) => ({
  orderShippingDetail: {
    address: '',
    city: '',
    country: '',
    postalCode: '',
    paymentMethod: 'pasargad',
  },

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
    }),
}));
