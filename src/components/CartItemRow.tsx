import { TableRow, TableCell } from '@/components/ui/table';
import type { CartItem } from '@/types/cart.model';


const CartItemRow = ({
  item,
  variant = 'checkout',
}: {
  item: CartItem;
  variant?: 'checkout' | 'summary';
}) => {
  return (
    <TableRow className={variant === 'checkout' ? 'border-none' : ''}>
      <TableCell className="text-right w-20">
        <img src={item.productImage} alt={item.productTitle} className="w-10 h-10 object-cover" />
      </TableCell>
      <TableCell className="text-right">{item.productTitle}</TableCell>
      <TableCell className="text-center">{item.quantity}</TableCell>
      <TableCell className="text-center">{item.price.toLocaleString()}</TableCell>
      <TableCell className="text-center">{(item.price * item.quantity).toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default CartItemRow;
