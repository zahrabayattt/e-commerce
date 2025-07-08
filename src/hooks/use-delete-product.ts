import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosInstance } from '@/lib/utils';

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => axiosInstance.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

export default useDeleteProduct;
