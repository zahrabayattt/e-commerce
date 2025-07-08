import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/utils';
import { toast } from 'react-hot-toast';

// a put api to change the status of the order to delivered
const useDeliverOrder = (orderId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      axiosInstance.put(`/orders/${orderId}/deliver`).then((res) => res.data),
    onSuccess: () => {
      toast.success('سفارش با موفقیت به ارسال شده تغییر کرد');
      queryClient.invalidateQueries({ queryKey: ['order', orderId] });
    },
    onError: () => {
      toast.error('خطا در تغییر وضعیت سفارش');
    },
  });
};

export default useDeliverOrder;