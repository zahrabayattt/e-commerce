import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateCategoryPayload, CategoryResponseModel } from '@/types/category.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateCategoryPayload) => {
      const res = await axiosInstance.post<
        CreateCategoryPayload,
        AxiosResponse<CategoryResponseModel>
      >('/category', payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast.success('دسته‌بندی با موفقیت ایجاد شد');
    },
    onError: () => {
      toast.error('ثبت دسته‌بندی با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useCreateCategory;
