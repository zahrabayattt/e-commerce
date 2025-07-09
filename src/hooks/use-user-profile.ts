import { axiosInstance } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { type User } from '@/types/user.model';

const useUserProfile = () => {
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: async () => {
      const res = await axiosInstance.get<User>('/users/profile');
      return res.data;
    },
  });
};
export default useUserProfile;
