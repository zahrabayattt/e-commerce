import { miladiToShamsi } from '@/lib/miladiToShamsi';
import ViewMoreButton from './ViewMoreButton';

interface ProductPreviewCardProps {
  _id: string;
  image: string;
  name: string;
  createdAt: string;
  description: string;
  price: number;
}

const ProductPreviewCard = (props: ProductPreviewCardProps) => {
  return (
    <div className="bg-[#F8F9FA] p-3 flex flex-row rounded-md shadow-sm w-full">
      <div className="w-24 aspect-square flex-shrink-0">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 px-4 py-1">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-black">{props.name}</p>
          <p className="text-sm text-[#58616C]">
            {miladiToShamsi(props.createdAt)}
          </p>
        </div>

        <p className="text-sm text-[#58616C] mt-1 leading-snug">
          {props.description.length > 100
            ? props.description.slice(0, 90) + "..."
            : props.description}
        </p>

        <div className="flex justify-between items-center mt-2">
          <ViewMoreButton _id={props._id}/>
          <p className="text-sm font-bold text-black">
            {props.price.toLocaleString("fa-IR")} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
