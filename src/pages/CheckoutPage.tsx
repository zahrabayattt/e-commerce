import OrderPriceSummary from '@/components/OrderPriceSummary';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import useGetOrderById from '@/hooks/useGetOrderById';
import { Table, TableHeader, TableBody, TableHead, TableRow } from '@/components/ui/table';
import OrderItemRow from '@/components/OrderItemRow';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const OrderDetailItem = ({ label, value }: { label: string; value: number | string | null }) => {
  return (
    <div className="flex gap-1 text-[13px] text-[#58616C]">
      <p className="text-[#DB2777]">{label}</p>
      <p className="text-black">{value}</p>
    </div>
  );
};

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id') || null;
  const { data: order, isLoading } = useGetOrderById(orderId || null);
  if (isLoading) return <p>در حال بارگذاری سفارش...</p>;
  const navigate = useNavigate();

  const handlePay = () => {
    if (order?._id) {
      toast('پرداخت با موفقیت انجام شد', {
        style: {
          border: '2px solid white',
          padding: '16px',
          color: 'white',
          background: 'gray',
          borderRadius: '8px',
        },
      });
    }
    navigate('/');
  };
  return (
    <div className="flex gap-15 mt-10 justify-center align-center">
      <Table className="table-fixed w-2/5 h-1/5 border">
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
          {order?.orderItems?.map((item) => <OrderItemRow key={item._id} item={item} />)}
        </TableBody>
      </Table>
      <div className="w-1/3">
        <div className="flex flex-col justify-between gap-3">
          <h4 className="font-bold">آدرس دریافت</h4>
          <OrderDetailItem label="شماره سفارش :" value={order?._id || ''} />
          <OrderDetailItem label="نام :" value={order?.user.username || ''} />
          <OrderDetailItem label="ایمیل :" value={order?.user.email || ''} />
          <OrderDetailItem label="آدرس :" value={order?.shippingAddress.address || ''} />
          <OrderDetailItem label="درگاه پرداخت :" value={'Pasargad'} />
          <span className="bg-[#E6E8EB] text-xs rounded-md px-3 py-2 mt-1">تکمیل نشده</span>
          <h3 className="my-2 font-bold">خلاصه خرید</h3>
          <OrderPriceSummary />
        </div>
        <Button
          variant="default"
          size="lg"
          className="bg-[#DB2777] rounded-xl w-full mt-5 cursor-pointer"
          onClick={handlePay}
        >
          پرداخت
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
