import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateProductPayload, ProductResponseModel } from '@/types/product.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (payload: CreateProductPayload) => {
      const res = await axiosInstance.post<
        CreateProductPayload,
        AxiosResponse<ProductResponseModel>
      >('/products', payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/products');
      toast.success('محصول با موفقیت ایجاد شد');
    },
    onError: () => {
      toast.error('ثبت محصول با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useCreateProduct;
