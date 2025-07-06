import SalesChart from '@/components/SalesChart';
import StaticsCard from '@/components/StaticsCard';
import useGetOrders from '@/hooks/use-get-orders';
import usePersianNumbers from '@/hooks/use-persian-numbers';
import useSales from '@/hooks/use-sales';
import useSalesByDate from '@/hooks/use-sales-by-date';
import useUsers from '@/hooks/use-users';
import { miladiToShamsi } from '@/lib/miladiToShamsi';
const Dashboard = () => {
  const { data: users } = useUsers();
  const { data } = useSalesByDate();
  const { data: orders } = useGetOrders(true);
  const { data: sales } = useSales();

  const toPersianNumbers = usePersianNumbers();
  const chartData =
    data
      ?.slice()
      .sort((a, b) => new Date(b._id).getTime() - new Date(a._id).getTime())
      .map((item) => ({
        date: miladiToShamsi(item._id),
        sales: item.totalSales,
      })) || [];

  return (
    <div className="flex flex-col gap-16 md:pt-12 pt-12">
      <div className="flex md:gap-32 gap-8 mx-auto">
        <StaticsCard
          title="فروش کل"
          value={
            sales ? toPersianNumbers(sales.totalSales.toLocaleString().toString()) + ' تومان' : '۰'
          }
        ></StaticsCard>
        <StaticsCard
          title="مشتری ها"
          value={Array.isArray(users) ? toPersianNumbers(users.length.toString()) : '۰'}
        ></StaticsCard>
        <StaticsCard
          title="سفارشات"
          value={Array.isArray(orders) ? toPersianNumbers(orders.length.toString()) : '۰'}
        ></StaticsCard>
      </div>
      <div>
        <SalesChart data={chartData}></SalesChart>
      </div>
    </div>
  );
};

export default Dashboard;
