import { axiosInstance } from '@/lib/utils';
import type { ProductModel } from '@/types/product.model';
import { useQuery } from '@tanstack/react-query';

export const fetchAllProducts = async (): Promise<ProductModel[]> => {
  const response = await axiosInstance.get('/products/allproducts');
  return response.data;
};


export const fetchProductById = (id: string) => {
 return useQuery({
    queryKey: ['products', id],
    queryFn: () => axiosInstance.get<ProductModel>(`/products/${id}`).then((res) => res.data),
    gcTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });
};