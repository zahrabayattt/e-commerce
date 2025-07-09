import { axiosInstance } from '../lib/utils';
import { useQuery } from '@tanstack/react-query';
import type { CategoryModel } from '@/types/category.model';

const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      axiosInstance.get<CategoryModel[]>('category/categories').then((res) => res.data),
    staleTime: 5 * 60 * 1000,
  });
};

export default useGetCategories;
