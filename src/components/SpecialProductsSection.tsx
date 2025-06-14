import React from "react";
import ProductCard from "./ProductCard2";
import type { Product } from "../ui/Product2";

const SpecialProductsSection = ({ products }: { products: Product[] }) => (
  <section className="my-8">
    <div className="flex items-center justify-between px-2">
      <h2 className="text-xl font-bold">محصولات ویژه</h2>
      <button className="bg-pink-700 text-white text-sm px-4 py-1 rounded-full">فروشگاه</button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </section>
);

export default SpecialProductsSection;