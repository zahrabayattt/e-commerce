'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

type SalesChartProps = {
  data: { date: string; sales: number }[];
};

const SalesChart = ({data}:SalesChartProps) => {
  return (
    <div className="w-[80%] md:h-[500px] h-[400px] mx-auto relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="date" tick={{ fill: '#58616C', fontSize: 12, fontWeight: 400 }} />
          <YAxis
            allowDecimals={false}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fill: '#58616C', fontSize: 12, fontWeight: 400 }}
          />
          <CartesianGrid vertical={false} />
          <Bar dataKey="sales" fill="#D61F69" barSize={data.length > 7 ? 60 : 120} />
        </BarChart>
      </ResponsiveContainer>
      <p className="absolute -top-4 right-14 text-[10px]">نمودار فروش</p>
      <p className="absolute right-8 top-1/2 -translate-y-1/2 text-[12px] [writing-mode:vertical-rl] rotate-180">
        فروش
      </p>
      <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[12px]">تاریخ</p>
    </div>
  );
};

export default SalesChart;
