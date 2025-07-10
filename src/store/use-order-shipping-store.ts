import { create } from 'zustand';
import type { IOrderShippingDetail } from '@/types/order.Shipping.model';

interface IOrderState {
  orderShippingDetail: IOrderShippingDetail;
  currentStep: number;
  setOrderShippingDetail: (name: string, value: string) => void;
  resetOrderShipping: () => void;
}

export const useOrderStore = create<IOrderState>()((set) => ({
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
}));
