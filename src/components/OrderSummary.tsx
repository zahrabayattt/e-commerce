import CartItemsTable from '@/components/CartItemsTable';
import OrderPriceSummary from './OrderPriceSummary';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { useOrderStore } from '@/store/use-order-shipping-store';

const OrderSummary = () => {
  const { orderShippingDetail } = useOrderStore();
  const navigate = useNavigate();

  return (
    <div className="mt-15">
      <CartItemsTable variant="summary" />
      <h3 className="my-5 font-bold">خلاصه خرید</h3>
      <div className="flex justify-between bg-[#E6E8EB] rounded-md px-5 py-4">
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">روش پرداخت</h4>
          <div className="flex gap-1 text-sm text-[#58616C]">
            <p>روش :</p>
            <p className="text-black">{orderShippingDetail.paymentMethod}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">آدرس دریافت</h4>
          <div className="flex gap-1 text-sm text-[#58616C]">
            <p>آدرس :</p>
            <p className="text-black">{orderShippingDetail.address}</p>
          </div>
        </div>
        <OrderPriceSummary />
      </div>
      <Button
        onClick={() => {
          navigate('/checkout');
        }}
        variant="default"
        size="lg"
        className="bg-[#DB2777] rounded-xl w-full mt-5"
      >
        ثبت سفارش
      </Button>
    </div>
  );
};

export default OrderSummary;
