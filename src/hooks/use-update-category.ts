import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateCategoryPayload, CategoryResponseModel } from '@/types/category.model';
import { axiosInstance } from '@/lib/utils';
import type { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, payload }: { id: string; payload: CreateCategoryPayload }) => {
      const res = await axiosInstance.put<
        CreateCategoryPayload,
        AxiosResponse<CategoryResponseModel>
      >(`/category/${id}`, payload);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast.success('دسته‌بندی با موفقیت ویرایش شد');
    },
    onError: () => {
      toast.error('ویرایش دسته‌بندی با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useUpdateCategory;
