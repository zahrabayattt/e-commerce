import type { AuthResponseModel, RegisterPayloadModel } from '@/types/auth.model';
import { axiosInstance } from '@/lib/utils';
import useAuthStore from '@/store/use-auth-store';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useRegister = () => {
  const navigate = useNavigate();
  const { setIsAdmin, setId, setUserName, setEmail } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: RegisterPayloadModel) => {
      const res = await axiosInstance.post<RegisterPayloadModel, AxiosResponse<AuthResponseModel>>(
        '/users',
        payload
      );

      setIsAdmin(res.data.isAdmin);
      setId(res.data._id);
      setUserName(res.data.username);
      setEmail(res.data.email);

      return res.data;
    },
    onSuccess: () => {
      navigate('/');
      toast.success('خوش آمدید');
    },
    onError: () => {
      toast.error('ثبت نام ناموفق');
    },
  });
};

export default useRegister;
