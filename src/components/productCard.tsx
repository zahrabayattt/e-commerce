import type { ProductModel } from '@/types/product.model';

interface IProductCard {
  product: ProductModel;
  componentSize: 'small' | 'large';
}
const ProductCard = ({product,componentSize,}: IProductCard) => {
  const productSizeClasses: Record<'small' | 'large', string> = {
    small: 'w-48 h-[180px]',
    large: 'w-72 h-64',
  };
  const productImageSizeClasses: Record<'small' | 'large', string> = {
    small: 'w-48 h-[150px]',
    large: 'w-72 h-64',
  };
  
  return (
    <div key={product._id} className={`${productSizeClasses[componentSize]}`}>
      <img
        src={product.image}
        alt={product.name}
        className={`productCard__img ${productImageSizeClasses[componentSize]}`}
      ></img>
      <div className={'flex flex-row justify-between gap-8 mt-2'}>
        <p className={'w-4/5 text-[8px] font-normal'}>{product.name}</p>
        <p className="">
          <p className={'px-2 py-1 text-[8px] badge'}>{product.price.toLocaleString()}تومان</p>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
