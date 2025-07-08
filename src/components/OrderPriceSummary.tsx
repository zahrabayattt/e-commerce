import { useSearchParams } from 'react-router-dom';
import useGetOrderById from '@/hooks/useGetOrderById';

const PriceSummaryItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex justify-between">
    <p>{label}</p>
    <p className="mr-10 text-black">{value.toLocaleString()} تومان</p>
  </div>
);

const OrderPriceSummary = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id');
  const { data: order, isLoading, isError } = useGetOrderById(orderId || '');

  if (isLoading) return <p className="text-sm">در حال بارگذاری...</p>;
  if (isError || !order) return <p className="text-sm text-red-500">خطا در دریافت اطلاعات سفارش</p>;

  const totalPrice = order.itemsPrice ?? 0;
  const tax = order.taxPrice ?? 0;
  const shippingCost = order.shippingPrice ?? 0;
  const totalAmount = order.totalPrice ?? totalPrice + tax + shippingCost;

  return (
    <div className="flex flex-col text-xs gap-1.5 text-[#58616C]">
      <PriceSummaryItem label="قیمت محصولات :" value={totalPrice} />
      <PriceSummaryItem label="مالیات :" value={tax} />
      <PriceSummaryItem label="هزینه ارسال :" value={shippingCost} />
      <PriceSummaryItem label="مبلغ نهایی :" value={totalAmount} />
    </div>
  );
};

export default OrderPriceSummary;
