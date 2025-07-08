import ProductCard from '@/components/productCard';
import useFavoriteStore from '@/store/useFavoriteStore';

const FavoritePage = () => {
  const getUserFavorites = useFavoriteStore((state) => state.getUserFavorites);
  const favorites = getUserFavorites();

  return (
    <div className="mr-30 grid grid-cols-3 gap-18">
      {favorites.length === 0 ? (
        <p className="col-span-2 pr-44 mt-16 text-center text-gray-500 text-lg">
          هنوز محصولی به علاقه‌مندی‌ها اضافه نشده است.
        </p>
      ) : (
        favorites.map((p) => <ProductCard key={p._id} product={p} componentSize="large" />)
      )}
    </div>
  );
};

export default FavoritePage;
