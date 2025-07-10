import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type User } from '@/types/user.model';
import { axiosInstance } from '@/lib/utils';
import toast from 'react-hot-toast';

const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<User>) => axiosInstance.put('/users/profile', data),
    onSuccess: () => {
      toast.success('پروفایل با موفقیت به روزرسانی شد');
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
    },
    onError: () => {
      toast.error('خطا در بروزرسانی پروفایل');
    },
  });
};
export default useUpdateProfile;
