import { axiosInstance } from "@/lib/utils";
import type { Sales } from "@/types/sales.model";
import { useQuery } from "@tanstack/react-query";

const useSales = () => {
    return useQuery ({
        queryKey: ["total-sales"],
        queryFn:() => axiosInstance.get<Sales>("orders/total-sales").then((res) => res.data)
    })
};

export default useSales;