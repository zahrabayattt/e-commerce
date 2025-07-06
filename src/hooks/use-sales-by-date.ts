import { axiosInstance } from "@/lib/utils";
import type { SalesByDate } from "@/types/sales.model";
import { useQuery } from "@tanstack/react-query";

const useSalesByDate = () => {
    return useQuery({
        queryKey: ["sales-by-date"],
        queryFn: () => axiosInstance.get<SalesByDate[]>("/orders/total-sales-by-date").then((res) => res.data)
    });
};

export default useSalesByDate;