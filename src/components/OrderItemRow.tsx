import { TableRow, TableCell } from '@/components/ui/table';
import type { IOrderItem } from '@/types/order.model';

const OrderItemRow = ({ item }: { item: IOrderItem }) => {
  return (
    <TableRow>
      <TableCell className="text-right w-20">
        <img
          src={`https://qbc9.liara.run/uploads/${item.image}`}
          alt={item.name}
          className="w-10 h-10 object-cover"
        />
      </TableCell>
      <TableCell className="text-right">{item.name}</TableCell>
      <TableCell className="text-center">{item.qty}</TableCell>
      <TableCell className="text-center">{item.price.toLocaleString()}</TableCell>
      <TableCell className="text-center">{(item.price * item.qty).toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default OrderItemRow;
