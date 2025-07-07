import { axiosInstance } from '@/lib/utils';
import type { ProductModel } from '@/types/product.model';
import { useQuery } from '@tanstack/react-query';

const useAllProducts = () => {
  return useQuery({
    queryKey: ['all-products'],
    queryFn: () => axiosInstance.get<ProductModel[]>('products/allproducts').then((res) => res.data),
  });
};

export default useAllProducts;
