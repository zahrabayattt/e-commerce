import type { ICartItem } from '@/@types/cart';

const PriceSummaryItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex justify-between text-[10px]">
    <p>{label}</p>
    <p className="mr-10 text-black">{value.toLocaleString()} تومان</p>
  </div>
);

const OrderPriceSummary = ({ cartItems }: { cartItems: ICartItem[] }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.productTotalPrice, 0);
  const tax = totalPrice * 0.2;
  const shippingCost = 55000;
  const totalAmount = totalPrice + tax + shippingCost;

  return (
    <div className="flex flex-col text-[10px] gap-1.5 text-[#58616C]">
      <PriceSummaryItem label="قیمت محصولات :" value={totalPrice} />
      <PriceSummaryItem label="مالیات :" value={tax} />
      <PriceSummaryItem label="هزینه ارسال :" value={shippingCost} />
      <PriceSummaryItem label="مبلغ نهایی :" value={totalAmount} />
    </div>
  );
};

export default OrderPriceSummary;
