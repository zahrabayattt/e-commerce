import { axiosInstance } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type ChangeRoleParams = {
  _id: string;
  isAdmin: boolean;
};
const useChangeRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ _id, isAdmin }: ChangeRoleParams) =>
      axiosInstance.patch(`/users/role/${_id}`, { isAdmin }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      toast.success('نقش کاربر با موفقیت تغییر پیدا کرد');
    },
    onError: () => {
      toast.error('لطفا مجدد امتحان کنید');
    },
  });
};

export default useChangeRole;
