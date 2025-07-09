import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import { useProduct } from '@/hooks/use-Product';
import { useCartStore } from '@/store/use-cart-store';
import { useState } from 'react';
import CommentSubmit from '@/components/CommentSubmit';
import CommentShow from '@/components/CommentShow';
import ProductRelated from '@/components/ProductRelated';
import type { CartItem } from '@/types/cart.model';
import StarRating from '@/components/StarRating';
import { formatDate } from '@/lib/utils';

const ProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useProduct(id!);
  const { addToCart } = useCartStore();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('CommentSubmit');

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا در دریافت محصولات</p>;
  if (!product) return <p>محصولی یافت نشد</p>;

  const handleQuantityClick = (value: number) => {
    setSelectedQuantity(value);
  };

  const handleAddClick = () => {
    const quantity = selectedQuantity;
    const cartItem: CartItem = {
      productId: product!._id,
      productTitle: product!.name,
      productBrand: '',
      productImage: product!.image,
      price: Number(product!.price),
      quantity: Number(quantity),
    };

    addToCart(cartItem);
  };

  const renderComponenet = () => {
    switch (activeTab) {
      case 'CommentSubmit':
        return <CommentSubmit product={product} />;
      case 'CommentShow':
        return <CommentShow productid={product._id} />;
      case 'ProductRelated':
        return <ProductRelated />;
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'CommentSubmit', label: 'ثبت نظر' },
    { id: 'CommentShow', label: 'مشاهده نظرات' },
    { id: 'ProductRelated', label: 'محصولات مرتبط' },
  ];
  return (
    <section>
      <div className="flex flex-row justify-around">
        <img className="w-2/6 rounded-lg" src={product.image} alt={product.name}></img>
        <div className="flex flex-col w-3xl max-w-3xl justify-between gap-10">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <h2 className="font-bold text-3xl">{product.price.toLocaleString()} تومان</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <p>امتیاز:{product.rating.toFixed(1)}</p>
            </div>

            <div className="flex flex-row gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>

              <p>تعداد:{product.countInStock}</p>
            </div>

            <div className="flex flex-row gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>

              <p>زمان به روز رسانی:{formatDate(product.updatedAt)}</p>
            </div>

            <div className="flex flex-row gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l16 0c8.8 0 16 7.2 16 16l0 288c0 44.2 35.8 80 80 80l18.7 0c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l197.5 0c-1.8 5-2.7 10.4-2.7 16c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l66.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-464 0c-8.8 0-16-7.2-16-16l0-288C128 35.8 92.2 0 48 0L32 0zM192 80l0 192c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-96 0 0 144c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L400 163.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1l0-144-96 0c-26.5 0-48 21.5-48 48z" />
              </svg>

              <p>موجودی:{product.countInStock}</p>
            </div>

            <div className="flex flex-row gap-2">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <p>نظرات:{product.numReviews}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <p> {product.numReviews} نظر</p>
              <StarRating rating={product.rating} />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <Button size={'md'} onClick={() => handleAddClick()}>
              افزودن به سبد خرید
            </Button>
            <Select onValueChange={handleQuantityClick} defaultValue="1">
              <SelectTrigger className="w-20 bg-white">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: product.quantity }).map((_, index) => {
                  const value = (index + 1).toString();
                  return (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-row  w-full gap-24 mt-12">
        <div className="flex flex-col m-8 right-48">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer pb-1 transition-all duration-300 
                ${activeTab === tab.id ? 'font-extrabold' : 'font-normal'}`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="m-8 absolute left-28">{renderComponenet()}</div>
      </div>
    </section>
  );
};

export default ProductPage;
