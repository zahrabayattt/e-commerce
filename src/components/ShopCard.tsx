import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { products, type Product } from '../utils/ProductsForShow';

const ShopCard = ({ product }: { product: Product }) => {
  const { image, title, price, description, brand } = product;

  return (
    <div className="w-[280px] h-[330px] bg-gray-100 rounded-2xl inline-block overflow-hidden mt-6 mr-6">
      <div className="relative  rounded-2xl overflow-hidden">
        <img className="block w-full h-[150px] object-cover" src={image} alt="" />
        <button>
          <Heart className="absolute top-2 right-4 text-gray-900 hover:fill-pink-600 hover:text-pink-600" />
        </button>
        <h2 className="absolute bottom-8 right-3 text-[12px] bg-pink-900 w-16 text-center py-1 rounded-2xl text-pink-200">
          {brand}
        </h2>
      </div>

      <div className="relative flex   ">
        <h2 className="text-[16px] pr-3 ">{title}</h2>
        <h2 className="absolute left-3 text-[15px] text-pink-700  ">
          {price.toLocaleString()}تومان
        </h2>
      </div>

      <p className="text-[14px] px-2 pt-2 text-gray-600 truncate  ">{description}</p>

      <div className="pt-14 px-2 flex  items-center ">
        <div className="bg-pink-600 h-8 w-[100px] rounded-[8px] flex items-center justify-center cursor-pointer mr-2">
          <button className="text-white text-[12px] cursor-pointer ">مشاهده بیشتر</button>
          <ArrowLeft className="w-4 h-4 text-white " />
        </div>
        <div className="pr-30">
          <ShoppingCart className="cursor-pointer text-gray-700 hover:text-pink-700 " />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
