import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateProductPayload, ProductResponseModel } from '@/types/product.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<ProductResponseModel, unknown, CreateProductPayload>({
    mutationFn: async (payload: CreateProductPayload) => {
      const formData = new FormData();

      formData.append('name', payload.name);
      formData.append('description', payload.description);
      formData.append('price', payload.price.toString());
      formData.append('quantity', payload.quantity.toString());
      formData.append('category', payload.category);
      formData.append('image', payload.image);

      const res: AxiosResponse<ProductResponseModel> = await axiosInstance.post('/products', formData);
      return res.data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('محصول با موفقیت ایجاد شد');
      navigate('/products');
    },

    onError: (error: any) => {
      const message = error?.response?.data?.message || 'ثبت محصول با خطا مواجه شد';
      toast.error(message);
    },
  });
};

export default useCreateProduct;
