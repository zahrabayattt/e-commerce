import type { ProductModel } from '@/types/product.model';
import FavoriteButton from './FavoriteButton';
import { Badge } from '@/components/ui/badge';

interface IProductCard {
  product: ProductModel;
  componentSize: 'small' | 'large';
}
const ProductCard = ({product,componentSize,}: IProductCard) => {
  const productSizeClasses: Record<'small' | 'large', string> = {
    small: 'w-1/2 h-1/2',
    large: 'w-3/5 h-3/5',
  };

  
  return (
    <section key={product._id} className={`w-${productSizeClasses[componentSize]}`}>
      <img
        src={product.image}
        alt={product.name}
        className={`productCard__img`}
      ></img>
      <div className={'flex flex-row justify-between gap-8 mt-2'}>
        <p className={'w-4/5 font-normal'}>{product.name}</p>
        <Badge variant="primary">{product.price.toLocaleString()}تومان</Badge>
      </div>
    </section>
  );
};

export default ProductCard;
