import React from 'react';
import type { Interface } from 'readline';
interface IProductCard {
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  componentSize: 'small' | 'large';
}
const ProductCard = ({
  productId,
  productTitle,
  productImage,
  price,
  componentSize,
}: IProductCard) => {
  const productSizeClasses: Record<'small' | 'large', string> = {
    small: 'w-48 h-[180px]',
    large: 'w-72 h-64',
  };
  const productImageSizeClasses: Record<'small' | 'large', string> = {
    small: 'w-48 h-[150px]',
    large: 'w-72 h-64',
  };
  return (
    <div key={productId} className={`${productSizeClasses[componentSize]}`}>
      <img
        src={productImage}
        alt={productTitle}
        className={`productCard__img ${productImageSizeClasses[componentSize]}`}
      ></img>
      <div className={'flex flex-row justify-between gap-8 mt-2'}>
        <p className={'w-4/5 text-[8px] font-normal'}>{productTitle}</p>
        <p className="">
          <p className={'px-2 py-1 text-[8px] badge'}>{price.toLocaleString()}تومان</p>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
