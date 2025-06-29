import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
import OrderRow from '@/components/orderRow';
import type { Order } from '@/@types/order';

export default function OrdersPage({ orders, isAdmin }: { orders: Order[]; isAdmin: boolean }) {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">عکس</TableHead>
          <TableHead className="text-center">نام محصول</TableHead>
          <TableHead className="text-center">تاریخ</TableHead>
          {isAdmin && <TableHead className="text-center">نام کاربر</TableHead>}
          <TableHead className="text-center">قیمت نهایی</TableHead>
          <TableHead className="text-center">پرداخت</TableHead>
          <TableHead className="text-center">ارسال</TableHead>
          <TableHead className="text-center">عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} isAdmin={isAdmin} />
        ))}
      </TableBody>
    </Table>
  );
}
