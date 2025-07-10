import { axiosInstance } from "@/lib/utils";
import type { ProductModel, UseProductType } from "@/types/product.model";

export const useProducts = async (): Promise<ProductModel[]> => {
  const response = await axiosInstance.get('/products/allproducts');
  return response.data;
};
