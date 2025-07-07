import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/useProducts';

const ProductCarousel = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });

  if (isLoading) return <p className="text-center py-6">در حال بارگذاری...</p>;
  if (isError) return <p className="text-center py-6 text-red-500">خطا در دریافت محصولات</p>;

  return (
    <Carousel className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <CarouselContent>
        {data?.map((p) => (
          <CarouselItem key={p._id}>
            <div className="p-2">
              <div className="bg-white rounded shadow border flex flex-col overflow-hidden">
                <div className="w-full bg-gray-100 flex justify-center items-center">
                  <img src={p.image} alt={p.name} className="w-full h-[300px] object-contain" />
                </div>
                <div className="p-4 text-right text-sm gap-2 flex flex-col">
                  <h3 className="text-base font-bold">{p.name}</h3>
                  <p className="text-sm font-semibold">{p.price.toLocaleString()} تومان</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                    <span>برند : اپل</span>
                    <span>⭐ امتیاز : {p.rating}</span>
                    <span>تعداد : {p.quantity}</span>
                    <span>🛒 موجودی : {p.countInStock}</span>
                    <span>💬 نظرات : {p.numReviews}</span>
                    <span>🕒 زمان بروزرسانی : چند لحظه قبل</span>
                  </div>
                  <p className="text-xs leading-5 mt-2 text-gray-600">{p.description}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
