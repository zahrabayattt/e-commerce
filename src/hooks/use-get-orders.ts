import { axiosInstance } from '@/lib/utils';
import type { UserOrder, AdminOrder } from '@/types/order.model';
import { useQuery } from '@tanstack/react-query';

const useGetOrders = (isAdmin: boolean) => {
  {
    if (isAdmin) {
      return useQuery({
        queryKey: ['orders'],
        queryFn: () => axiosInstance.get<AdminOrder[]>('/orders').then((res) => res.data),
      });
    } else {
      return useQuery({
        queryKey: ['orders'],
        queryFn: () => axiosInstance.get<UserOrder[]>('/orders/mine').then((res) => res.data),
      });
    }
  }
};

export default useGetOrders;
