import ProductCard from './productCard';
import { products } from './products';

const ProductRelated = () => {
  return (
    <div className='w-3/5'>
      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto place-items-center">
        {products.slice(0, 4).map((p) => (
          <ProductCard
            key={p.id}
            productId={p.id}
            productTitle={p.title}
            productImage={p.image}
            price={p.price}
            componentSize="small"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductRelated;
