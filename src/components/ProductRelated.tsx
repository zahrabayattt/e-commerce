import { Link } from 'react-router-dom';
import ProductCard from './productCard';
import useAllProducts from '@/hooks/use-all-products';

const ProductRelated = () => {

    const { data: product, isLoading, error } = useAllProducts();

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت محصولات</p>;

  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center w-3xl max-w-3xl">
      {product?.slice(0, 6).map((product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <ProductCard product={product} componentSize="large" />
        </Link>
      ))}
    </div>
  );
};

export default ProductRelated;
