import { Heart} from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { products, type Product } from "./ProductsForShow";
import FavoriteButton from "./FavoriteButton";

const ShopCard = ({product}:{product:Product}) => {
  const { image, title, price, description, brand } = product;
  

   return (
    <div className="bg-gray-200 rounded-2xl overflow-hidden flex flex-col w-full max-w-xs h-fit">
      
      <div className="relative   ">
        <img src={image} alt="" className="w-full aspect-[5/2] object-cover " />
        <FavoriteButton product={product}/>
        <span className="absolute top-23  right-3 text-[12px] bg-pink-900 text-center py-1 px-2 rounded-2xl text-pink-200">
          {brand}
        </span>
      </div>

    
      <div className=" flex flex-col  px-4 ">
        <div>
          <div className="flex items-center justify-between  font-medium">
            <h2 className="truncate text-[16px]">{title}</h2>
            <span className="text-pink-700 whitespace-nowrap text-sm">
              {price.toLocaleString()} تومان
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-snug ">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 pb-4">
          <button className="flex items-center gap-1 bg-pink-600 text-white text-xs px-2 py-2 rounded-sm hover:bg-pink-700">
            مشاهده بیشتر
            <ArrowLeft className="w-3 h-3" />
          </button>
          <ShoppingCart className="text-gray-700 ml-4 hover:text-pink-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};


export default ShopCard