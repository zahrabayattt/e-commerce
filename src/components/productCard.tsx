import type { ProductModel } from '@/types/product.model';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

interface IProductCard {
  product: ProductModel;
  componentSize: 'small' | 'large';
}
const ProductCard = ({ product, componentSize }: IProductCard) => {
  const isSmall = componentSize === 'small';

  return (
    <div className="relative">
      <div className="absolute top-2 right-2 z-5">
        <FavoriteButton product={product} />
      </div>
      <Link to={`/product/${product._id}`} key={product._id}>
        <div
          className={`relative rounded-lg shadow-md overflow-hidden border${isSmall ? 'w-64 h-64' : 'w-80 h-80'}flex flex-col bg-white dark:bg-gray-800`}
        >
          <div className={`${isSmall ? 'h-44' : 'h-48'} w-full relative overflow-hidden`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-2 flex flex-col justify-between flex-1">
            <p className="text-base font-medium line-clamp-2 dark:text-neutral-300">{product.name}</p>
            <div className="flex justify-between items-center mt-2">
              <Badge variant="primary" className="text-sm">
                {product.price.toLocaleString()} تومان
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
