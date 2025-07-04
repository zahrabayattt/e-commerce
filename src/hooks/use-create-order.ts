import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateOrderPayload, OrderResponseModel } from '@/types/order.model';
import { useOrderStore } from '@/store/orderShippingStore';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useCreateOrder = () => {
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
