import { useMutation } from '@tanstack/react-query';
import type { CreateOrderPayload, OrderResponseModel } from '@/types/order.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';

const useCreateOrder = () => {
  return useMutation({
    mutationFn: async (payload: CreateOrderPayload) => {
      const res = await axiosInstance.post<CreateOrderPayload, AxiosResponse<OrderResponseModel>>(
        '/orders',
        payload
      );
      return res.data;
    },
  });
};
export default useCreateOrder;
