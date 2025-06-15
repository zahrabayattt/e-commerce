import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import type { ICartItem } from '@/pages/ShoppingProgress';

interface IOrderShippingDetail {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  paymentMethod: string;
}

const OrderItem = ({ item }: { item: ICartItem }) => {
  return (
    <TableRow>
      <TableCell className="text-right w-20">
        <img src={item.productImage} alt={item.productTitle} className="w-10 h-10 object-cover" />
      </TableCell>
      <TableCell className="text-right">{item.productTitle}</TableCell>
      <TableCell className="text-center">{item.productQuantity}</TableCell>
      <TableCell className="text-center">${item.productPrice.toLocaleString()}</TableCell>
      <TableCell className="text-center">${item.productTotalPrice.toLocaleString()}</TableCell>
    </TableRow>
  );
};

const OrderTotalItem = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="flex justify-between text-[10px]">
      <p>{label}</p>
      <p className="mr-10 text-black">{value.toLocaleString()} تومان</p>
    </div>
  );
};

const OrderSummary = ({
  cartItems,
  orderShippingDetail,
}: {
  cartItems: ICartItem[];
  orderShippingDetail: IOrderShippingDetail;
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.productTotalPrice, 0);
  const taxRate = 0.2;
  const tax = totalPrice * taxRate;
  const shippingCost = 55000;
  const totalAmount = totalPrice + tax + shippingCost;

  return (
    <div className="mt-15">
      <Table className="table-fixed text-xs">
        <TableHeader>
          <TableRow>
            <TableHead className="text-right w-20">عکس</TableHead>
            <TableHead className="text-right">نام محصول</TableHead>
            <TableHead className="text-center">تعداد</TableHead>
            <TableHead className="text-center">قیمت</TableHead>
            <TableHead className="text-center">قیمت نهایی</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <OrderItem key={item.productId} item={item} />
          ))}
        </TableBody>
      </Table>

      <div className="mt-5">
        <h3 className="mb-5 font-bold">خلاصه خرید</h3>
        <div className="flex justify-between bg-[#E6E8EB] rounded-md px-5 py-4">
          <div className="flex flex-col gap-2 text-sm">
            <h4 className="font-bold">روش پرداخت</h4>
            <div className="flex gap-1 text-xs text-[#58616C]">
              <p>روش:</p>
              <p className="text-black">
                {orderShippingDetail.paymentMethod === 'pasargad'
                  ? 'درگاه پرداخت پاسارگاد'
                  : orderShippingDetail.paymentMethod}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h4 className="font-bold">آدرس دریافت</h4>
            <div className="flex gap-1 text-xs text-[#58616C]">
              <p>آدرس:</p>
              <p className="text-black">{orderShippingDetail.address}</p>
            </div>
          </div>
          <div className="flex flex-col text-[10px] gap-1.5 text-[#58616C]">
            <OrderTotalItem label="قیمت محصولات :" value={totalPrice} />
            <OrderTotalItem label="مالیات :" value={tax} />
            <OrderTotalItem label="هزینه ارسال :" value={shippingCost} />
            <OrderTotalItem label="مبلغ نهایی :" value={totalAmount} />
          </div>
        </div>

        <div className="mt-5 w-full max-w-full">
          <Button variant="default" size="lg" className="bg-[#DB2777] rounded-xl w-full">
            ثبت سفارش
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
