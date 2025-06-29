import SalesChart from '@/components/SalesChart';
import StaticsCard from '@/components/StaticsCard';

const Dashboard = () => {
  // this data is just for test
  const data = [
    { date: '5', sales: 0 },
    { date: '4', sales: 3 },
    { date: '3', sales: 0 },
    { date: '2', sales: 0 },
    { date: '1', sales: 0 },
    { date: '0', sales: 0 },
  ];

  return (
    <div className="flex flex-col gap-16 md:pt-12 pt-12">
      <div className="flex md:gap-32 gap-8 mx-auto">
        <StaticsCard title="فروش کل" value="0 تومان"></StaticsCard>
        <StaticsCard title="مشتری ها" value="10"></StaticsCard>
        <StaticsCard title="سفارشات" value="100"></StaticsCard>
      </div>
      <div>
        <SalesChart data={data}></SalesChart>
      </div>
    </div>
  );
};

export default Dashboard;
