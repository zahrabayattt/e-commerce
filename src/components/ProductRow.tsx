import React from 'react';
import ProductCard from './productCard';
import { products } from './products';
import ProductPage from '@/pages/ProductPage';
import { Link } from 'react-router-dom';

const ProductRow: React.FC = () => (
  <section>
    <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto place-items-center">
      {products.slice(0, 4).map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <ProductCard
            key={p.id}
            productId={p.id}
            productTitle={p.title}
            productImage={p.image}
            price={p.price}
            componentSize="small"
          />
        </Link>
      ))}
    </div>
  </section>
);

export default ProductRow;
