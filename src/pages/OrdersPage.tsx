import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
import OrderRow from '@/components/OrderRow';
import useAuthStore from '@/store/use-auth-store';
import useGetOrders from '@/hooks/use-get-orders';

export default function OrdersPage() {
  const { isAdmin } = useAuthStore();
  const { data: orders } = useGetOrders(isAdmin);
  
  if (!orders?.length) {
    return <p className="text-center mx-auto">سفارشی برای نمایش وجود ندارد.</p>;
  }
  return (
    <Table dir="rtl" className="w-[80%] mx-auto">
      <TableHeader>
        <TableRow className="border-none h-16">
          <TableHead className="text-center text-lg font-bold">عکس</TableHead>
          <TableHead className="text-center text-lg font-bold">نام محصول</TableHead>
          <TableHead className="text-center text-lg font-bold">تاریخ</TableHead>
          {isAdmin && <TableHead className="text-center text-lg font-bold">کاربر</TableHead>}
          <TableHead className="text-center text-lg font-bold">قیمت نهایی</TableHead>
          <TableHead className="text-center text-lg font-bold">پرداخت</TableHead>
          <TableHead className="text-center text-lg font-bold">ارسال</TableHead>
          <TableHead className="text-center text-lg font-bold">عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders?.map((order) =>
            order.orderItems.map((orderItem) => {
              console.log(order.user);
              
              const username = typeof order?.user === 'string' ? order?.user : order?.user?.username;

              return (
                <OrderRow
                  key={orderItem._id}
                  order={{
                    _id: order._id,
                    image: orderItem.image,
                    name: orderItem.name,
                    createdAt: order.createdAt,
                    user: username,
                    price: orderItem.price,
                    qty: orderItem.qty,
                    isPaid: order.isPaid,
                    isDelivered: order.isDelivered,
                  }}
                  isAdmin={isAdmin}
                />
              );
            })
          )}
      </TableBody>
    </Table>
  );
}
