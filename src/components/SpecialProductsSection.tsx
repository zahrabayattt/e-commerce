import React from 'react';
import ProductCard from './productCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/useProducts';


const SpecialProductsSection: React.FC = () => {
    const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (isError) return <p>خطا در دریافت محصولات</p>;
    
  return (
    <section className="mt-14">
      <h2 className="text-xl font-bold mb-6 text-right">محصولات ویژه</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.slice(0, 8).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductCard product={product} componentSize="large" />
          </Link>
        ))}
      </div>
    </section>
  );

};

export default SpecialProductsSection;
