import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateProductPayload, ProductResponseModel } from '@/types/product.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: CreateProductPayload }) => {
      const res = await axiosInstance.put<
        CreateProductPayload,
        AxiosResponse<ProductResponseModel>
      >(`/products/${id}`, payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      navigate('/products');
      toast.success('محصول با موفقیت به‌روزرسانی شد');
    },
    onError: () => {
      toast.error('به‌روزرسانی محصول با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useUpdateProduct;
