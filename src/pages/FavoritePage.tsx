import ProductCard from "@/components/productCard";
import useFavoriteStore from "@/store/useFavoriteStore";
const FavoritePage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <div className="mr-30 grid grid-cols-4   ">
        
        {favorites.slice(0,20).map((p)=>(
          <ProductCard productId={p.id} productImage={p.image} productTitle={p.title}
          price={p.price} componentSize={"large"}/>
        ))}
        

    </div>
  )
};

export default FavoritePage