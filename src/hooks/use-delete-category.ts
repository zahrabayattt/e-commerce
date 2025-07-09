import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/utils';
import toast from 'react-hot-toast';

const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => axiosInstance.delete(`/category/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast.success('دسته‌بندی با موفقیت حذف شد');
    },
    onError: () => {
      toast.error('حذف دسته‌بندی با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useDeleteCategory;
