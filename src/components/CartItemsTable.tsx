import { Table, TableHeader, TableBody, TableHead, TableRow } from '@/components/ui/table';
import CartItemRow from '@/components/CartItemRow';
import type { ICartItem } from '@/types/cart';

interface ICartItemsTable {
  cartItems: ICartItem[];
  variant?: 'checkout' | 'summary';
}

const CartItemsTable = ({ cartItems, variant = 'checkout' }: ICartItemsTable) => {
  return (
    <Table
      className={`table-fixed text-xs ${variant === 'checkout' ? 'w-2/5 h-1/5 border' : 'w-full'}`}
    >
      <TableHeader>
        <TableRow>
          <TableHead className="text-right w-20 font-bold">عکس</TableHead>
          <TableHead className="text-right font-bold">نام محصول</TableHead>
          <TableHead className="text-center font-bold">تعداد</TableHead>
          <TableHead className="text-center font-bold">قیمت</TableHead>
          <TableHead className="text-center font-bold">قیمت نهایی</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item) => (
          <CartItemRow key={item.productId} item={item} variant={variant} />
        ))}
      </TableBody>
    </Table>
  );
};

export default CartItemsTable;
