import { axiosInstance } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const deleteUser = async (userId: string) => {
  return axiosInstance.delete(`/users/${userId}`);
};
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('کاربر با موفقیت حذف شد');
    },
    onError: () => {
      toast.error('امکان حذف ادمین وجود ندارد !');
    },
  });
};
