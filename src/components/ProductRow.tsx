import React from 'react';
import ProductCard from './productCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/useProducts';

const ProductRow: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطا در دریافت محصولات</p>;

  return (
    <section>
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto place-items-center">
        {data?.slice(0, 4).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductCard key={product._id} product={product} componentSize="small" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductRow;
