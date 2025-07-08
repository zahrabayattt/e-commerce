import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/services/user-service';
import type { UserUpdatePayload } from '@/types/UserUpdatePayload';
import toast from 'react-hot-toast';

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: UserUpdatePayload) => updateUser(data),
    onSuccess: () => {
      toast.success('پروفایل با موفقیت بروزرسانی شد!');
    },
    onError: (err: any) => {
      const errorMessage = err.response?.data?.message || 'An unexpected error occurred.';
      toast.error(errorMessage);
      console.error(err);
    },
  });
};
