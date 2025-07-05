import CartItemsTable from '@/components/CartItemsTable';
import OrderPriceSummary from '@/components/OrderPriceSummary';
import { Button } from '@/components/ui/button';
import useAuthStore from '@/store/use-auth-store';
import { useCartStore } from '@/store/cartStore';
import { useOrderStore } from '@/store/orderShippingStore';
import type { CreateOrderPayload } from '@/types/order.model';
import useCreateOrder from '@/hooks/use-create-order';

const OrderDetailItem = ({ label, value }: { label: string; value: number | string | null }) => {
  return (
    <div className="flex gap-1 text-[11px] text-[#58616C]">
      <p className="text-[#DB2777]">{label}</p>
      <p className="text-black">{value}</p>
    </div>
  );
};

const CheckoutPage = () => {
  const { username, email } = useAuthStore();
  const { cartItems } = useCartStore();
  const { orderShippingDetail } = useOrderStore();
  const { mutate: OrderMutate, status: OrderStatus } = useCreateOrder();

  const handleSubmitOrder = () => {
    const payload: CreateOrderPayload = {
      orderItems: cartItems.map((item) => ({
        _id: item.productId,
        name: item.productTitle,
        qty: item.quantity,
      })),
      paymentMethod: orderShippingDetail.paymentMethod,
      shippingAddress: {
        address: orderShippingDetail.address,
        city: orderShippingDetail.city,
        postalcode: orderShippingDetail.postalCode,
      },
    };
    OrderMutate(payload);
  };

  return (
    <div className="flex gap-15 mt-10 justify-center align-center">
      <CartItemsTable variant="checkout" />
      <div className="w-1/3">
        <div className="flex flex-col justify-between gap-2">
          <h4 className="font-bold">آدرس دریافت</h4>
          <OrderDetailItem label="شماره سفارش :" value={Math.floor(1000 + Math.random() * 9000)} />
          <OrderDetailItem label="نام :" value={username} />
          <OrderDetailItem label="ایمیل :" value={email} />
          <OrderDetailItem label="آدرس :" value={orderShippingDetail.address} />
          <OrderDetailItem label="درگاه پرداخت :" value={orderShippingDetail.paymentMethod} />
          <span className="bg-[#E6E8EB] text-xs rounded-md px-3 py-2 mt-1">تکمیل نشده</span>
          <h3 className="my-3 font-bold">خلاصه خرید</h3>
          <OrderPriceSummary />
        </div>
        <Button
          variant="default"
          size="lg"
          className="bg-[#DB2777] rounded-xl w-full mt-5"
          onClick={handleSubmitOrder}
          disabled={OrderStatus === 'pending'}
        >
          پرداخت
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
