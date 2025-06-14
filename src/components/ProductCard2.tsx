import React from "react";
import type { Product } from "../ui/Product2";


const ProductCard = ({ title, price, imageUrl }: Product) => (
  <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
      <span className="absolute top-2 right-2 text-gray-400 hover:text-pink-600 cursor-pointer">♥</span>
    </div>
    <div className="flex items-center justify-between p-2 text-sm">
    <div className="text-center flex pb-2 text-sm font-semibold">{title}</div>
      <span className="bg-pink-900 flex text-white text-xs p-0.5 rounded-full">
        {price.toLocaleString()} تومان
      </span>
    </div>
  </div>
);
export default ProductCard;