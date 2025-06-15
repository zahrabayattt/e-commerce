import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Order } from '@/types/order';

export default function OrderRow({ order, isAdmin }: { order: Order; isAdmin: boolean }) {
  return (
    <TableRow>
      <TableCell className="p-2">
        <div className="flex justify-center items-center h-full">
          <img src={order.image} alt={order.product} className="w-10 h-10 rounded-md" />
        </div>
      </TableCell>

      <TableCell className="mx-auto text-center">{order.product}</TableCell>
      <TableCell className="mx-auto text-center">{order.date}</TableCell>
      {isAdmin && <TableCell className="mx-auto text-center">{order.user}</TableCell>}
      <TableCell className="mx-auto text-center">{order.price}</TableCell>
      <TableCell className="mx-auto text-center">
        <Badge className={order.paid ? 'bg-[#22C55E]' : 'bg-[#B71D18]'}>
          {order.paid ? 'پرداخت شده' : 'پرداخت نشده'}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Badge
          className={`${
            order.shipped === 'در حال ارسال'
              ? 'bg-[#00B8D9]'
              : order.shipped === 'ارسال شده'
                ? 'bg-[#22C55E]'
                : 'bg-[#B71D18]'
          } text-white`}
        >
          {order.shipped}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Button variant="secondary" size="sm" className="bg-[#DB2777] text-white">
          جزئیات
        </Button>
      </TableCell>
    </TableRow>
  );
}
