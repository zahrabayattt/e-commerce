import { ShoppingCart } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import FavoriteButton from "./FavoriteButton";
import { useCartStore } from "@/store/cartStore";
import type { ProductModel } from "@/types/product.model";

const ShopCard = ({product}:{product:ProductModel}) => {
  const { image,name, price, description,category } = product;
  
  const addToCart = useCartStore((state)=> state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const isInCart = useCartStore((state) => state.cartItems.some((item) => item.productId === product._id.toString()));

  const handleCartClick = () =>{
    if(isInCart){
      removeFromCart(product._id.toString());
    }
    else{
      addToCart({
        productId: product._id.toString(),
        productTitle: product.name,
        productImage: product.image,
        productBrand: product.category,
        price: product.price,
        quantity: 1,
      })
    }
  }
   return (
    <div className="bg-gray-200 rounded-2xl overflow-hidden flex flex-col w-full max-w-xs h-fit">
      
      <div className="relative   ">
        <img src={image} alt="" className="w-full aspect-[5/2] object-cover " />
        <FavoriteButton product={product}/>
        <span className="absolute top-23  right-3 text-[12px] bg-pink-900 text-center py-1 px-2 rounded-2xl text-pink-200">
          {category}
        </span>
      </div>

    
      <div className=" flex flex-col  px-4 ">
        <div>
          <div className="flex items-center justify-between  font-medium">
            <h2 className="truncate text-[16px]">{name}</h2>
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
          <ShoppingCart onClick={handleCartClick} className={`ml-4  cursor-pointer transition-colors ${isInCart?'text-pink-700' : 
          "text-gray-700 hover:text-pink-700" 

          }`} />
        </div>
      </div>
    </div>
  );
};


export default ShopCard