import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import useAuthStore from '@/store/use-auth-store';
import useGetOrder from '@/hooks/use-get-order';
import useDeliverOrder from '@/hooks/use-deliver-order';

const OrderDetailsPage = () => {
  const { id } = useParams();
  const { isAdmin } = useAuthStore();

  const { data: order, isLoading, isError } = useGetOrder(id!, isAdmin);
  const deliverMutation = useDeliverOrder(id!);

  if (isLoading) return <p className="text-center">در حال بارگذاری...</p>;
  if (isError || !order) return <p className="text-center text-red-500">خطا در دریافت اطلاعات سفارش</p>;

  const totalPrice = order.itemsPrice;
  const tax = order.taxPrice;
  const shippingCost = order.shippingPrice;
  const totalAmount = order.totalPrice;

  return (
    <div className="flex w-9/10 mx-auto gap-10 mt-10 justify-center align-center" dir="rtl">
      {/* table of the orders */}
      <div className="flex-1">
        <div className='border border-gray-300 px-6 py-3'>
          <Table className='table-fixed text-xs' dir='rtl' >
            <TableHeader>
              <TableRow className='border-b border-gray-300'>
                <TableHead className="text-right w-20 font-bold">عکس</TableHead>
                <TableHead className="text-right font-bold">نام محصول</TableHead>
                <TableHead className="text-center font-bold">تعداد</TableHead>
                <TableHead className="text-center font-bold">قیمت</TableHead>
                <TableHead className="text-center font-bold">قیمت نهایی</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="p-2 text-right w-20">
                    <div className="flex justify-center items-center h-full ">
                      <img src={`https://qbc9.liara.run/uploads/${item.image}`} alt={item.name} className="w-10 h-10 object-cover" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.name}</TableCell>
                  <TableCell className="text-center">{item.qty}</TableCell>
                  <TableCell className="text-center">{item.price.toLocaleString()}</TableCell>
                  <TableCell className="text-center">{(item.qty * item.price).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* orders details */}
      <div className="w-2/6 px-4 flex flex-col gap-2 ml-[50px]">
        <div className='flex flex-col justify-between gap-3 text-black dark:text-white '>
          <h2 className="font-bold text-black  mb-2">آدرس دریافت</h2>
          <p className='text-[11px] '><span className="font-semibold text-[#DB2777]">شماره سفارش:</span> {order._id}</p>
          <p className='text-[11px]'><span className="font-semibold text-[#DB2777]">نام:</span> {typeof order.user === 'object' && order.user !== null ? order.user.username : '-'}</p>
          <p className='text-[11px]'><span className="font-semibold text-[#DB2777]">ایمیل:</span> {typeof order.user === 'object' && order.user !== null ? order.user.email : '-'}</p>
          <p className='text-[11px]'><span className="font-semibold text-[#DB2777]">آدرس:</span> {order.shippingAddress.address}</p>
          <p className='text-[11px]'><span className="font-semibold text-[#DB2777]">روش پرداخت:</span> {order.paymentMethod}</p>
        </div>

        <div className='bg-[#E6E8EB] dark:bg-neutral-800 text-xs rounded-sm border border-gray-300 px-3 py-2 mt-2'>
          <h3 className="font-bold text-xs">{!order.isPaid ? 'پرداخت نشده' : !order.isDelivered ? 'در حال ارسال' : 'ارسال شده'}</h3>
        </div>

        <div>
          <h2 className="font-bold my-4">خلاصه خرید</h2>
          <div className='flex flex-col gap-2 text-[12px]'>
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

        {/* delivered status button */}
        {isAdmin && !order.isDelivered && (
          <Button variant="default" size="lg" disabled={deliverMutation.isPending} onClick={() => deliverMutation.mutate()} className="bg-[#DB2777] text-white rounded-4xl w-full cursor-pointer hover:bg-[#db276f] transition-all mt-4">
            {deliverMutation.isPending ? 'در حال ارسال...' : 'ارسال شده'}
          </Button>
        )}
      </div>
    </div>
  );
}

export default OrderDetailsPage