import { axiosInstance } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

 const createReview = useMutation({
    mutationFn: async ({ rating, comment }) => {
      try {
        const res = await axiosInstance.post(`/products/${product._id}/reviews`, {
          rating,
          comment,
        });
        return res.data;
      } catch (error) {
        console.error('Error sending review:', error.response || error.message);
        throw error;
      }
    },
  });
export default createReview;

