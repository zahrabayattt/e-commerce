import { axiosInstance } from '@/lib/utils';
import type { User } from '@/types/user.model';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const updateUser = (updatedUser: Partial<User> & { _id: string }) => {
  return axiosInstance.put(`/users/${updatedUser._id}`, updatedUser);
};
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('اطلاعات کاربر با موفقیت تغییر پیدا کرد');
    },
    onError: () => {
      toast.error('لطفا مجدد امتحان کنید');
    },
  });
};
