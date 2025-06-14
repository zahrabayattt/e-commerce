import React from "react";
import ProductCard from "./ui/productCard";
import { products } from "./products";

const SpecialProductsSection: React.FC = () => (
  <section className="mt-14">
    <h2 className="text-xl font-bold mb-6 text-right">محصولات ویژه</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, 8).map((p) => (
        <ProductCard
          key={p.id}
          productId={p.id}
          productTitle={p.title}
          productImage={p.image}
          price={p.price}
          componentSize="large"
        />
      ))}
    </div>
  </section>
);

export default SpecialProductsSection;
