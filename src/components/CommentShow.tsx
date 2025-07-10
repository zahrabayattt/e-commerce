import { useProduct } from '@/hooks/use-Product';
import { formatDate } from '@/lib/utils';
import StarRating from './StarRating';


type Props = {
  productid: string;
};
const CommentShow = ({ productid }: Props) => {
  const { data: product, isLoading, error } = useProduct(productid!);
    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت محصولات</p>;
  return (
    <div className="flex flex-col gap-6 w-3xl max-w-3xl">
      {product?.reviews.map((review) => {
        return (
          <div className="flex flex-col bg-white dark:bg-neutral-800 rounded-md">
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
