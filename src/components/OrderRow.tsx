import { TableCell, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { OrderRowModel } from '@/types/order.model';
import usePersianNumbers from '@/hooks/use-persian-numbers';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/lib/utils';
import useMakeOrderDelivered from '@/hooks/use-make-order-delivered';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const OrderRow = ({ order, isAdmin }: { order: OrderRowModel; isAdmin: boolean }) => {
  const toPersianNumber = usePersianNumbers();
  const navigate = useNavigate();
  const [isDelivered, setIsDelivered] = useState(order.isDelivered);
  const [isPaid, setIsPaid] = useState(order.isPaid);
  const { mutate, isPending } = useMakeOrderDelivered();
  const queryClient = useQueryClient();

  const handleClick = (_id: string,setState:React.Dispatch<React.SetStateAction<boolean>>) => {
    if (isDelivered || isPending) return;

    mutate(_id, {
      onSuccess: () => {
        setState(true);
        queryClient.invalidateQueries({ queryKey: ['orders'] });
        toast.success('تغییر وضعیت سفارش موفقیت آمیز بود.');
      },
      onError: () => {
        toast.error('تغییر وضعیت سفارش با خطا مواجه شد');
      },
    });
  };

  // const handleClickPaying = (_id: string) => {
  //   if (isPaid || isPending) return;

  //   mutate(_id, {
  //     onSuccess: () => {
  //       setIsPaid(true);
  //       queryClient.invalidateQueries({ queryKey: ['orders'] });
  //       toast.success('تغییر وضعیت سفارش موفقیت آمیز بود.');
  //     },
  //     onError: () => {
  //       toast.error('تغییر وضعیت سفارش با خطا مواجه شد');
  //     },
  //   });
  // };

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
        <Badge
          className={isPaid ? 'bg-[#22C55E]' : 'bg-[#B71D18] text-white cursor-pointer'}
          onClick={() => handleClick(order._id, setIsPaid)}
        >
          {isPaid ? 'پرداخت شده' : 'پرداخت نشده'}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Badge
          className={`${isDelivered ? 'bg-[#22C55E]' : 'bg-[#B71D18]'} text-white cursor-pointer`}
          onClick={() => handleClick(order._id, setIsDelivered)}
        >
          {isDelivered ? 'ارسال شده' : 'ارسال نشده'}
        </Badge>
      </TableCell>
      <TableCell className="mx-auto text-center">
        <Button
          onClick={() => navigate(`/orders/${order._id}`)}
          variant="secondary"
          size="sm"
          className="bg-[#DB2777] text-white cursor-pointer hover:bg-[#871849]"
        >
          جزئیات
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
