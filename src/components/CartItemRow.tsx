import { TableRow, TableCell } from '@/components/ui/table';
import type { ICartItem } from '@/types/cart';

const CartItemRow = ({
  item,
  variant = 'checkout',
}: {
  item: ICartItem;
  variant?: 'checkout' | 'summary';
}) => {
  return (
    <TableRow className={variant === 'checkout' ? 'border-none' : ''}>
      <TableCell className="text-right w-20">
        <img src={item.productImage} alt={item.productTitle} className="w-10 h-10 object-cover" />
      </TableCell>
      <TableCell className="text-right">{item.productTitle}</TableCell>
      <TableCell className="text-center">{item.productQuantity}</TableCell>
      <TableCell className="text-center">${item.productPrice.toLocaleString()}</TableCell>
      <TableCell className="text-center">${item.productTotalPrice.toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default CartItemRow;
