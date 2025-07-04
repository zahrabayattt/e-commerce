import type { LoginPayloadModel, AuthResponseModel } from '@/types/auth.model';
import { axiosInstance } from '@/lib/utils';
import useAuthStore from '@/store/use-auth-store';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useLogin = () => {
  const navigate = useNavigate();
  const { setIsAdmin, setId } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: LoginPayloadModel) => {
      const res = await axiosInstance.post<LoginPayloadModel, AxiosResponse<AuthResponseModel>>(
        '/users/auth',
        payload
      );

      setIsAdmin(res.data.isAdmin);
      setId(res.data._id);

      return res.data;
    },
    onSuccess: () => {
      navigate('/');
      toast.success('خوش آمدید');
    },
    onError() {
      toast.error('ورود ناموفق');
    },
  });
};

export default useLogin;
