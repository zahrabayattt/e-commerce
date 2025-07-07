import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { OrderRowModel } from '@/types/order.model';
import usePersianNumbers from '@/hooks/use-persian-numbers';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/lib/utils';

export default function OrderRow({ order, isAdmin }: { order: OrderRowModel; isAdmin: boolean }) {
  const toPersianNumber = usePersianNumbers();
  const navigate = useNavigate();
  const createdAt = formatDate(order.createdAt);
  const tax = 0.1;
  return (
    <TableRow className="border-none">
      <TableCell className="p-2">
        <div className="flex justify-center items-center h-full">
          <img src={order.image} alt={order.name} className="w-10 h-10 rounded-md" />
        </div>
      </TableCell>

      <TableCell className="mx-auto text-center">{order.name}</TableCell>
      <TableCell className="mx-auto text-center">{createdAt}</TableCell>
      {isAdmin && <TableCell className="mx-auto text-center">{order.user}</TableCell>}
      <TableCell className="mx-auto text-center">
        {toPersianNumber(((order.price + order.price * tax) * order.qty).toLocaleString())}
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Badge className={order.isPaid ? 'bg-[#22C55E]' : 'bg-[#B71D18]'}>
          {order.isPaid ? 'پرداخت شده' : 'پرداخت نشده'}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Badge className={`${order.isDelivered ? 'bg-[#22C55E]' : 'bg-[#B71D18]'} text-white`}>
          {order.isDelivered ? 'ارسال شده' : 'ارسال نشده'}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Button
          onClick={() => navigate(`${order._id}`)}
          variant="secondary"
          size="sm"
          className="bg-[#DB2777] text-white"
        >
          جزئیات
        </Button>
      </TableCell>
    </TableRow>
  );
}
