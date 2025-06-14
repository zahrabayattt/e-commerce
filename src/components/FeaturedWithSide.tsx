import React from "react";
import ProductCard from "./ProductCard2";
import FeaturedSlider from "./FeaturedSlider";
import type { Product } from "../ui/Product2";

const FeaturedWithSide = ({ featuredItems, sideItems }: { featuredItems: Product[]; sideItems: Product[] }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-8">
      {/* سمت راست: محصول ویژه */}
      <div className="lg:col-span-2 order-2 lg:order-2">
        <FeaturedSlider items={featuredItems} />
      </div>

      {/* سمت چپ: ۴ محصول */}
      <div className="grid grid-cols-2 gap-4 order-1 lg:order-1">
        {sideItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWithSide;

