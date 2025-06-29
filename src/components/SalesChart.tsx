'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

type SalesChartProps = {
  data: { date: string; sales: number }[];
};

const SalesChart = ({data}:SalesChartProps) => {
  return (
    <div className="w-[80%] md:h-[600px] h-[500px] mx-auto relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="date" tick={{ fill: '#58616C', fontSize: 8, fontWeight: 400 }} />
          <YAxis
            allowDecimals={false}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fill: '#58616C', fontSize: 8, fontWeight: 400 }}
          />
          <CartesianGrid vertical={false} />
          <Bar dataKey="sales" fill="#D61F69" barSize={150} />
        </BarChart>
      </ResponsiveContainer>
      <p className="absolute -top-4 right-14 text-[10px]">نمودار فروش</p>
      <p className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] [writing-mode:vertical-rl] rotate-180">
        فروش
      </p>
      <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px]">تاریخ</p>
    </div>
  );
};

export default SalesChart;
