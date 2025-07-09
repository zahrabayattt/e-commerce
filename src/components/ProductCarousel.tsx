import { useQuery } from '@tanstack/react-query';
import { useProducts } from '@/hooks/use-Products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { products } from './ProductsForShow';
import { Link } from 'react-router-dom';


const ProductCarousel = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: useProducts,
  });

  console.log('products',products)

  if (isLoading) return <p className="text-center py-6">در حال بارگذاری...</p>;
  if (isError) return <p className="text-center py-6 text-red-500">خطا در دریافت محصولات</p>;
  
  return (
    <section className="max-w-2xl w-full">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data?.slice(0, 3).map((p) => (
          <SwiperSlide className="z-10" key={p._id}>
            <Link to={`/product/${p._id}`} key={p._id}>
              <div className="flex justify-center mx-auto p-4">
                <div className="bg-white rounded shadow border flex flex-col overflow-hidden">
                  <div className="w-2xl bg-gray-100 flex justify-center items-center">
                    <img src={p.image} alt={p.name} className="w-full h-[300px] object-contain" />
                  </div>
                  <div className="p-4 text-right text-sm gap-2 flex flex-col">
                    <h3 className="text-base font-bold">{p.name}</h3>
                    <p className="text-sm font-semibold">{p.price.toLocaleString()} تومان</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
