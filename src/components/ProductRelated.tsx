import { Link } from 'react-router-dom';
import ProductCard from './productCard';
import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/use-Products';

const ProductRelated = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });


  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center w-3xl max-w-3xl">
      {data?.slice(0, 6).map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <ProductCard product={product} componentSize="large" />
        </Link>
      ))}
    </div>
  );
};

export default ProductRelated;
