import type { FC } from 'react';
import type { Product } from '../utils/ProductsForShow';

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-card dark:text-amber-50 dark:bg-black text-card-foreground rounded-lg shadow p-4 flex flex-row-reverse justify-between items-center max-w-[500px] transition-colors">
      <div>
        <div className="flex justify-between">
          <h2 className="font-bold mb-1">{product.title}</h2>
          <p className="text-xs text-muted-foreground mb-1">{product.date}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <button className="bg-[#DB2777] dark:text-amber-50 text-primary-foreground text-xs px-4 py-2 rounded-lg hover:opacity-90 transition">
            مشاهده بیشتر
          </button>
          <p className="font-bold  text-sm">{product.price} تومان</p>
        </div>
      </div>
      <img src={product.image} alt={product.title} className="w-20 h-20 object-contain ml-4" />
    </div>
  );
};

export default ProductCard;
