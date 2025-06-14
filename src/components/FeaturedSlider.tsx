import React from "react";
import type { Product } from "../ui/Product2";

const FeaturedSlider = ({ items }: { items: Product[] }) => {
  const [index, setIndex] = React.useState(0);
  const current = items[index];

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div className="relative bg-white rounded-xl shadow-md scale-90 overflow-hidden">
      <div className="flex items-center justify-between">
        <button onClick={next} className="p-2 text-xl">▶</button>
        <img src={current.imageUrl} alt={current.title} className="h-72 w-1/2 object-contain" />
        <button onClick={prev} className="p-2 text-xl">◀</button>
      </div>
      <div className="p-4 text-right">
        <h2 className="text-lg font-bold">{current.title}</h2>
        <p className="text-pink-700 font-semibold">{current.price.toLocaleString()} تومان</p>
        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 mt-2">
          <div>برند: {current.brand}</div>
          <div>امتیاز: {current.rating} ⭐</div>
          <div>موجودی: {current.stock}</div>
          <div>تعداد: {current.reviews}</div>
          <div>نظرات: {current.reviews}</div>
          <div>بروزرسانی: {current.updatedAt}</div>
        </div>
        <p className="mt-2 text-sm text-gray-700 line-clamp-2">{current.description}</p>
      </div>
    </div>
  );
};

export default FeaturedSlider;