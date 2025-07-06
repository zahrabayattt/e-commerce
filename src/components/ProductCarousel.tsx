import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "./products";


const ProductCarousel: React.FC = () => (
  <Carousel className="w-full max-w-2xl mx-auto p-4 rounded-lg shadow-md">
    <CarouselContent>
      {products.map((p) => (
        <CarouselItem key={p.id} className="w-full">
          <div className="bg-white rounded shadow border flex flex-col overflow-hidden">
            <div className="w-full bg-gray-100 flex justify-center items-center">
              <img
                src="./src/assets/images/auth-light.png"
                alt={p.title}
                className="w-full h-[300px] object-contain"
              />
            </div>

            <div className="p-4 text-right text-sm gap-2 flex flex-col">
              <h3 className="text-base font-bold">{p.title}</h3>
              <p className="text-sm font-semibold">{p.price.toLocaleString()} تومان</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <span>برند : اپل</span>
                <span>⭐ امتیاز : ۵</span>
                <span>تعداد : ۵۲</span>
                <span>🛒 موجودی : ۱۰</span>
                <span>💬 نظرات : ۴۲۰۲</span>
                <span>🕒 زمان بروزرسانی : چند لحظه قبل</span>
              </div>
              <p className="text-xs leading-5 mt-2 text-gray-600">
                آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. صفحه نمایش با فناوری
                ProMotion، تراشه A16 Bionic و سیستم دوربین سه‌گانه ...
              </p>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-left-4" />
    <CarouselNext className="-right-4" />
  </Carousel>
);

export default ProductCarousel;
