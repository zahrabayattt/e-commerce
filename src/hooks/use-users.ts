import { axiosInstance } from '@/lib/utils';
import type { User } from '@/types/user.model';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => axiosInstance.get<User[]>('users').then((res) => res.data),
  });
};

export default useUsers;