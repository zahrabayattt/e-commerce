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
      const formData = new FormData();
      formData.append('name', payload.name);
      formData.append('description', payload.description);
      formData.append('price', String(payload.price));
      formData.append('quantity', String(payload.quantity));
      formData.append('category', payload.category);
      formData.append('image', payload.image);
      const res = await axiosInstance.put<FormData, AxiosResponse<ProductResponseModel>>(
        `/products/${id}`,
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
      navigate('/all-products');
      toast.success('محصول با موفقیت به‌روزرسانی شد');
    },
    onError: () => {
      toast.error('به‌روزرسانی محصول با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useUpdateProduct;
