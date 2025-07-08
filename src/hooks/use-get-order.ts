import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/utils';
import { type GetOrder } from '@/types/order';

// a get api using custom hook and react query to get the order by its id
const useGetOrder = (id: string, isAdmin: boolean) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () =>
      axiosInstance
        .get<GetOrder>(`/orders/${id}`)
        .then((res) => res.data),
  });
};

export default useGetOrder;