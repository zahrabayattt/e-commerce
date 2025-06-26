import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
// import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { OrderItem , OrderDetails } from '@/types/order';

const OrderDetailsPage = ({ orderItems, details ,isAdmin }: { orderItems: OrderItem[]; isAdmin: boolean; details: OrderDetails }) => {
  const totalPrice = orderItems.reduce((sum, item) => sum + item.total, 0);
  const taxRate = 0.2;
  const tax = totalPrice * taxRate;
  const shippingCost = 55000;
  const totalAmount = totalPrice + tax + shippingCost;
  return (
    <div className="flex gap-6 p-6" dir="rtl">
      {/* table of the orders */}
      <div className="flex-1">
        <div className='border border-gray-300 px-6 py-3'>
          <Table dir='rtl' >
            <TableHeader>
              <TableRow className='border-b border-gray-300'>
                <TableHead className="text-right w-20">عکس</TableHead>
                <TableHead className="text-right">نام محصول</TableHead>
                <TableHead className="text-center">تعداد</TableHead>
                <TableHead className="text-center">قیمت</TableHead>
                <TableHead className="text-center">قیمت نهایی</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="p-2 text-right w-20">
                    <div className="flex justify-center items-center h-full ">
                      <img src={item.image} alt={item.product} className="w-10 h-10 object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.product}</TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-center">${item.price.toLocaleString()}</TableCell>
                  <TableCell className="text-center">${item.total.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* orders details */}
      <div className="w-[30%] p-4 flex flex-col gap-4">
        <div className='flex flex-col gap-4'>
          <h2 className="font-bold text-lg mb-2">آدرس دریافت</h2>
          <p><span className="font-semibold text-[#DB2777]">شماره سفارش:</span> {details.id}</p>
          <p><span className="font-semibold text-[#DB2777]">نام:</span> {details.name}</p>
          <p><span className="font-semibold text-[#DB2777]">ایمیل:</span> {details.email}</p>
          <p><span className="font-semibold text-[#DB2777]">آدرس:</span> {details.address}</p>
          <p><span className="font-semibold text-[#DB2777]">روش پرداخت:</span> {details.paymentMethod}</p>
        </div>

        <div className='rounded-lg border border-gray-300 bg-gray-200 mt-2 px-3 py-1'>
          <h3 className="font-bold text-lg m-2">Status</h3>
          {/* <Badge
            className={
              details.status === 'ارسال شده'
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 text-white'
            }
          >
            Status
          </Badge> */}
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">خلاصه خرید</h2>
          <div className='flex flex-col gap-4'>
            <div className="flex justify-between">
              <span className='text-[#58616C]'>قیمت محصولات:</span>
              <span>{totalPrice.toLocaleString()} تومان</span>
            </div>
            <div className="flex justify-between">
              <span className='text-[#58616C]'>هزینه ارسال:</span>
              <span>{shippingCost.toLocaleString()} تومان</span>
            </div>
            <div className="flex justify-between">
              <span className='text-[#58616C]'>مالیات:</span>
              <span>{tax.toLocaleString()} تومان</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span className='text-[#58616C]'>مبلغ نهایی:</span>
              <span>{totalAmount.toLocaleString()} تومان</span>
            </div>
          </div>
        </div>

        {/* دکمه ارسال سفارش فقط برای ادمین و اگر هنوز سفارش ارسال نشده باشد */}
        {isAdmin && details.status !== 'ارسال شده' && (
          <Button className="bg-[#DB2777] text-white rounded-4xl cursor-pointer hover:bg-[#db276f] transition-all mt-4">
            ارسال شده
          </Button>
        )}
      </div>
    </div>
  );
}

export default OrderDetailsPage