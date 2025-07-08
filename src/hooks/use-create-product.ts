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
      const formData = new FormData();
      formData.append('name', payload.name);
      formData.append('description', payload.description);
      formData.append('price', String(payload.price));
      formData.append('quantity', String(payload.quantity));
      formData.append('category', payload.category);
      formData.append('image', payload.image);

      const res = await axiosInstance.post<FormData, AxiosResponse<ProductResponseModel>>(
        '/products',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

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
