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
    <Table dir="rtl" className="w-[80%] mx-auto mt-[3%]">
      <TableHeader>
        <TableRow className="border-none h-16">
          <TableHead className="text-center">عکس</TableHead>
          <TableHead className="text-center">نام محصول</TableHead>
          <TableHead className="text-center">تاریخ</TableHead>
          {isAdmin && <TableHead className="text-center">کاربر</TableHead>}
          <TableHead className="text-center">قیمت نهایی</TableHead>
          <TableHead className="text-center">پرداخت</TableHead>
          <TableHead className="text-center">ارسال</TableHead>
          <TableHead className="text-center">عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders &&
          orders?.map((order) =>
            order.orderItems.map((orderItem) => {
              const username = isAdmin ? order.user.username : order.user;
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
