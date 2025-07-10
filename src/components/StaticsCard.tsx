type StaticsCardProps = {
  title: string;
  value: string;
};

const StaticsCard = ({ title, value }: StaticsCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 md:w-[200px] md:h-[100px] w-[140px] h-[70px] md:text-sm text-[10px] md:p-2 p-1 flex flex-col rounded-sm">
      <div className="rounded-full text-white bg-[#DB2777] w-7 h-7 flex items-center justify-center md:mb-4 mb-1">
        $
      </div>
      <p className="text-[#58616C] dark:text-gray-400">{title}</p>
      <p className="font-bold ">{value}</p>
    </div>
  );
};

export default StaticsCard;
