import CartItemsTable from '@/components/CartItemsTable';
import OrderPriceSummary from './OrderPriceSummary';
import type { ICartItem } from '@/types/cart';
import type { IOrderShippingDetail } from '@/types/orderShipping';
import { Button } from '@/components/ui/button';

interface IOrderSummary {
  cartItems: ICartItem[];
  orderShippingDetail: IOrderShippingDetail;
}

const OrderSummary = ({ cartItems, orderShippingDetail }: IOrderSummary) => {
  return (
    <div className="mt-15">
      <CartItemsTable cartItems={cartItems} variant="summary" />
      <h3 className="my-5 font-bold">خلاصه خرید</h3>
      <div className="flex justify-between bg-[#E6E8EB] rounded-md px-5 py-4">
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">روش پرداخت</h4>
          <div className="flex gap-1 text-xs text-[#58616C]">
            <p>روش:</p>
            <p className="text-black">{orderShippingDetail.paymentMethod}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">آدرس دریافت</h4>
          <div className="flex gap-1 text-xs text-[#58616C]">
            <p>آدرس:</p>
            <p className="text-black">{orderShippingDetail.address}</p>
          </div>
        </div>
        <OrderPriceSummary cartItems={cartItems} />
      </div>
      <Button variant="default" size="lg" className="bg-[#DB2777] rounded-xl w-full mt-5">
        ثبت سفارش
      </Button>
    </div>
  );
};

export default OrderSummary;
