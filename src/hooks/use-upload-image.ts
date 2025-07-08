import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateImagePayload, ImageResponseModel } from '@/types/image.model';
import { axiosInstance } from '@/lib/utils';
import toast from 'react-hot-toast';

const useUploadImage = () => {
  const queryClient = useQueryClient();

  return useMutation<ImageResponseModel, any, CreateImagePayload>({
    mutationFn: async (payload: CreateImagePayload) => {
      const formData = new FormData();
      formData.append('image', payload.image);

      const res = await axiosInstance.post<ImageResponseModel>('/upload', formData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images'] });
      toast.success('عکس با موفقیت آپلود شد');
    },
    onError: () => {
      toast.error('آپلود عکس با خطا مواجه شد، لطفا دوباره امتحان کنید');
    },
  });
};

export default useUploadImage;
