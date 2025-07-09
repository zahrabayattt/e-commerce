import { axiosInstance } from '@/lib/utils';
import { useMutation } from '@tanstack/react-query';

type DeliveredOrder = {
  _id: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
  };
  paymentResult: {
    update_time: string;
  };
  orderItems: {
    _id: string;
    name: string;
    qty: number;
    price: number;
    image: string;
    product: string;
  }[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const useMakeOrderDelivered = () => {
  return useMutation<DeliveredOrder, Error, string>({
    mutationFn: (_id) => axiosInstance.put(`/orders/${_id}/deliver`).then((res) => res.data),
  });
};

export default useMakeOrderDelivered;
