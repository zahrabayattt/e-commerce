import ProductCard from './ProductCardAll';
import { products } from '../utils/ProductsForShow';

const ProductList = () => {
  return (
    <div className="flex justify-center items-center gap-16 pt-30 p-5 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
