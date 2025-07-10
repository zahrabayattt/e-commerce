import CartItemsTable from '@/components/CartItemsTable';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import { useOrderStore } from '@/store/use-order-shipping-store';
import useCreateOrder from '@/hooks/use-create-order';
import { useCartStore } from '@/store/use-cart-store';
import type { CreateOrderPayload } from '@/types/order.model';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import OrderPriceFromCart from './OrderPriceFromCart';

const OrderSummary = () => {
  const { mutate: createOrder } = useCreateOrder();
  const { orderShippingDetail, resetOrderShipping } = useOrderStore();
  const { cartItems } = useCartStore();
  const navigate = useNavigate();
  const { clearCart } = useCartStore();
  const queryClient = useQueryClient();

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
        postalCode: orderShippingDetail.postalCode,
      },
    };
    createOrder(payload, {
      onSuccess: (data) => {
        clearCart();
        resetOrderShipping();
        queryClient.invalidateQueries({ queryKey: ['orders'] });
        toast.success('سفارش با موفقیت ثبت شد');
        navigate(`/checkout?id=${data._id}`);
      },
      onError: () => {
        toast.error('لطفا مجدد امتحان کنید');
      },
    });
  };

  return (
    <div className="mt-15">
      <CartItemsTable variant="summary" />
      <h3 className="my-5 font-bold">خلاصه خرید</h3>
      <div className="flex justify-between bg-[#E6E8EB] rounded-md px-5 py-4 dark:bg-neutral-900">
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">روش پرداخت</h4>
          <div className="flex gap-1 text-sm text-[#58616C] dark:text-neutral-400">
            <p>روش :</p>
            <p className="text-black dark:text-neutral-100">{orderShippingDetail.paymentMethod}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-bold">آدرس دریافت</h4>
          <div className="flex gap-1 text-sm text-[#58616C] dark:text-neutral-400 ">
            <p>آدرس :</p>
            <p className="text-black dark:text-neutral-100">{orderShippingDetail.address}</p>
          </div>
        </div>
        <OrderPriceFromCart />
      </div>
      <Button
        onClick={handleSubmitOrder}
        variant="default"
        size="lg"
        className="bg-[#DB2777] rounded-xl w-full mt-5 cursor-pointer"
      >
        ثبت سفارش
      </Button>
    </div>
  );
};

export default OrderSummary;
