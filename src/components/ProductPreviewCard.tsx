import useDeleteProduct from '@/hooks/use-delete-product';
import ViewMoreButton from './ViewMoreButton';
import { formatDate } from '@/lib/utils';
import { Trash, SquarePen } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface ProductPreviewCardProps {
  _id: string;
  image: string;
  name: string;
  createdAt: string;
  description: string;
  price: number;
}

const ProductPreviewCard = (props: ProductPreviewCardProps) => {
  const { mutate: deleteProduct, isPending } = useDeleteProduct();
  const navigate = useNavigate();

  const handleDelete = (productId: string) => {
    const deleteToast = toast.loading('در حال حذف محصول...');

    deleteProduct(productId, {
      onSuccess: () => {
        toast.success('محصول با موفقیت حذف شد.', { id: deleteToast });
      },
      onError: () => {
        toast.error('حذف محصول با خطا مواجه شد.', { id: deleteToast });
      },
    });
  };
  return (
    <div className="bg-[#F8F9FA] dark:bg-gray-800 p-3 flex flex-row rounded-md shadow-sm w-full">
      <div className="w-24 aspect-square flex-shrink-0">
        <img src={props.image} alt={props.name} className="w-full h-full object-cover rounded-md" />
      </div>

      <div className="flex flex-col justify-between flex-1 px-4 py-1">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-black dark:text-white">{props.name}</p>
          <p className="text-sm text-[#58616C] dark:text-gray-400">{formatDate(props.createdAt)}</p>
        </div>

        <p className="text-sm text-[#58616C] mt-1 leading-snug dark:text-gray-400 ">
          {props.description.length > 100
            ? props.description.slice(0, 90) + '...'
            : props.description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <ViewMoreButton _id={props._id} />
          <p className="text-sm font-bold text-black dark:text-white">
            {props.price.toLocaleString('fa-IR')} تومان
          </p>
          <div className="flex">
            <button
              className="hover:cursor-pointer hover:bg-[#871849] hover:text-white flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
              onClick={() => navigate(props._id)}
            >
              <SquarePen />
            </button>
            <button
              className="hover:cursor-pointer hover:bg-[#871849] hover:text-white flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
              onClick={() => handleDelete(props._id)}
              disabled={isPending}
            >
              <Trash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
