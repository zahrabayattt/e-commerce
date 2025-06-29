import CartItemsTable from '@/components/CartItemsTable';
import OrderPriceSummary from '@/components/OrderPriceSummary';
import { Button } from '@/components/ui/button';
import type { ICartItem } from '@/@types/cart';
import type { IOrderShippingDetail } from '@/@types/orderShipping';

const OrderDetailItem = ({ label, value }: { label: string; value: number | string }) => {
  return (
    <div className="flex gap-1 text-[11px] text-[#58616C]">
      <p className="text-[#DB2777]">{label}</p>
      <p className="text-black">{value}</p>
    </div>
  );
};

const CheckoutPage = ({
  cartItems,
  orderShippingDetail,
}: {
  cartItems: ICartItem[];
  orderShippingDetail: IOrderShippingDetail;
}) => {
  return (
    <div className="flex gap-15 mt-10 justify-center align-center">
      <CartItemsTable cartItems={cartItems} variant="checkout" />
      <div className="w-1/4">
        <div className="flex flex-col justify-between gap-2">
          <h4 className="font-bold">آدرس دریافت</h4>
          <OrderDetailItem label="شماره سفارش :" value="123456" />
          <OrderDetailItem label="نام :" value="zahra" />
          <OrderDetailItem label="ایمیل :" value="zahrabayat367@gmail.com" />
          <OrderDetailItem label="آدرس :" value={orderShippingDetail.address} />
          <OrderDetailItem label="درگاه پرداخت :" value={orderShippingDetail.paymentMethod} />
          <span className="bg-[#E6E8EB] text-xs rounded-md px-3 py-2 mt-1">Status</span>
          <h3 className="my-3 font-bold">خلاصه خرید</h3>
          <OrderPriceSummary cartItems={cartItems} />
        </div>
        <Button variant="default" size="lg" className="bg-[#DB2777] rounded-xl w-full mt-5">
          پرداخت
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
