import ProductCard from "@/components/productCard";
import useFavoriteStore from "@/store/useFavoriteStore";
const FavoritePage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <div className="mr-30 grid grid-cols-3  ">
        
        {favorites.slice(0,20).map((p)=>(
          <ProductCard key={p._id} product={p} 
           componentSize={"large"}/>
        ))}
        

    </div>
  )
};

export default FavoritePage