import ProductCard from "@/components/productCard";
import useFavoriteStore from "@/store/useFavoriteStore";
const FavoritePage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  if(favorites.length === 0){
    return <p className="mx-auto w-full text-center">محصولی برای نمایش وجود ندارد.</p>
  }
  
  return (
    <div className="mr-30 grid grid-cols-3 gap-18 ">
        
        {favorites.slice(0,20).map((p)=>(
          <ProductCard key={p._id} product={p} 
           componentSize={"large"}/>
        ))}
        

    </div>
  )
};

export default FavoritePage