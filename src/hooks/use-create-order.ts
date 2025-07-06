import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateOrderPayload, OrderResponseModel } from '@/types/order.model';
import { useCartStore } from '@/store/use-cart-store';
import { useOrderStore } from '@/store/use-order-shipping-store';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useCreateOrder = () => {
  const { clearCart } = useCartStore();
  const { resetOrderShipping } = useOrderStore();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (payload: CreateOrderPayload) => {
      const res = await axiosInstance.post<CreateOrderPayload, AxiosResponse<OrderResponseModel>>(
        '/orders',
        payload
      );
      return res.data;
    },
    onSuccess: () => {
      clearCart();
      resetOrderShipping();
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      navigate('/order');
      toast.success('سفارش با موفقیت ثبت شد');
    },
    onError: () => {
      toast.error('لطفا مجدد امتحان کنید');
    },
  });
};
export default useCreateOrder;
