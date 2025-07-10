import React from 'react';
import ProductCard from './productCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/use-Products';
import { Badge } from './ui/badge';
import { products } from './ProductsForShow';


const SpecialProductsSection: React.FC = () => {
    const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });

  const sortedRating = data?.sort((a, b) => a.price - b.price).slice(0, 8);

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (isError) return <p>خطا در دریافت محصولات</p>;
    
  return (
    <section className="mt-14 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between content-between w-11/12">
        <h2 className="text-xl font-bold mb-6 text-right">محصولات ویژه</h2>
        <Link to={`/shop`}>
          <Badge variant="primary" className="w-32 h-8">
            <p className="font-bold">فروشگاه</p>
          </Badge>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 w-11/12">
        {sortedRating?.slice(0, 8).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductCard product={product} componentSize="small" />
          </Link>
        ))}
      </div>
    </section>
  );

};

export default SpecialProductsSection;
