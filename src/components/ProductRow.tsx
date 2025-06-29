import React from 'react';
import ProductCard from './productCard';
import { products } from '../utils/products';

const ProductRow: React.FC = () => (
  <section>
    <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto place-items-center">
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
  </section>
);

export default ProductRow;
