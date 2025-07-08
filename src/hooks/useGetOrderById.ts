import { axiosInstance } from '@/lib/utils';
import type { UserOrderPopulated } from '@/types/order.model';
import { useQuery } from '@tanstack/react-query';

const useGetOrderById = (id: string | null) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => axiosInstance.get<UserOrderPopulated>(`/orders/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};
export default useGetOrderById;
