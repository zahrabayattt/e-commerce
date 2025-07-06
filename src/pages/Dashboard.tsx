import SalesChart from '@/components/SalesChart';
import StaticsCard from '@/components/StaticsCard';
import useSalesByDate from '@/hooks/use-sales-by-date';
import useUsers from '@/hooks/use-users';
import { miladiToShamsi } from '@/lib/miladiToShamsi';
const Dashboard = () => {
  const { data: users } = useUsers();
  const { data } = useSalesByDate();
  const chartData =
    data
      ?.slice()
      .sort((a, b) => new Date(b._id).getTime() - new Date(a._id).getTime()) // sort by actual date
      .map((item) => ({
        date: miladiToShamsi(item._id), // format after sorting
        sales: item.totalSales,
      })) || [];

  return (
    <div className="flex flex-col gap-16 md:pt-12 pt-12">
      <div className="flex md:gap-32 gap-8 mx-auto">
        <StaticsCard title="فروش کل" value="0 تومان"></StaticsCard>
        <StaticsCard
          title="مشتری ها"
          value={Array.isArray(users) ? users.length.toString() : '0'}
        ></StaticsCard>
        <StaticsCard title="سفارشات" value="100"></StaticsCard>
      </div>
      <div>
        <SalesChart data={chartData}></SalesChart>
      </div>
    </div>
  );
};

export default Dashboard;
