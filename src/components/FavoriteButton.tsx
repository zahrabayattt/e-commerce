import { Heart } from "lucide-react";
import useFavoriteStore from "@/store/useFavoriteStore";
import type { ProductModel } from "@/types/product.model";

const FavoriteButton = ({product}:{product:ProductModel}) => {
  const isFavorite = useFavoriteStore((state) => state.isFavorite(product._id));
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);
  const addFavorite = useFavoriteStore((state)=> state.addFavorite);
  
  const toggleFavorite=() =>{
    isFavorite?removeFavorite(product._id):addFavorite(product);
  }

  return (
    <button onClick={toggleFavorite}>
      <Heart
        className={`w-5 h-5 absolute top-2 right-4 transition-colors duration-200 cursor-pointer
          ${isFavorite ? "fill-pink-600 text-pink-600" : "text-gray-900 hover:fill-pink-600 hover:text-pink-600"}`}
      />
    </button>
  );
};

export default FavoriteButton