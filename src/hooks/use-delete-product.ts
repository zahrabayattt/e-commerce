import { axiosInstance } from "@/lib/utils";
import type { ProductModel } from "@/types/product.model";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn:(_id:string) => axiosInstance.delete<ProductModel>(`products/${_id}`).then((res) => res.data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["all-products"] });
          },
    })
};

export default useDeleteProduct;