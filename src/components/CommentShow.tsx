import { useProduct } from '@/hooks/use-Product';
import { formatDate } from '@/lib/utils';
import StarRating from './StarRating';
import { useEffect } from 'react';


type Props = {
  productid: string;
};
const CommentShow = ({ productid }: Props) => {
  const { data: product, isLoading, error, refetch } = useProduct(productid!);
    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت محصولات</p>;
    useEffect(() => {
      refetch();
    }, []);
  return (
    <div className="flex flex-col gap-6 w-3xl max-w-3xl">
      {product?.reviews.map((review) => {
        return (
          <div className="flex flex-col bg-white rounded-md">
            <div className="flex flex-row justify-between p-2 w-full">
              <p className="text-neutral-400">{review.name}</p>
              <p>{formatDate(review.createdAt)}</p>
            </div>
            <p className="m-2">{review.comment} </p>
            <div className="m-2">
                  <StarRating rating={review.rating}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentShow;
