import { axiosInstance } from '@/lib/utils';
import useAuthStore from '@/store/use-auth-store';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const useLogout = () => {
  const reset = useAuthStore((state) => state.reset);

  return useMutation({
    mutationFn: () => axiosInstance.post('/users/logout'),
    onSuccess: () => {
      reset();
      toast.success('با موفقیت خارج شدید');
    },
    onError: () => {
      toast.error('خطایی رخ داد');
    },
  });
};

export default useLogout;
