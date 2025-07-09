import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ViewMoreButtonProps {
  onClick?: () => void;
  text?: string;
  _id: string;
}

export default function ViewMoreButton({ text = 'مشاهده بیشتر', _id }: ViewMoreButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/product/${_id}`)}
      className="flex items-center gap-2 px-3 py-2 bg-[#DB2777] text-white rounded-md hover:bg-[#871849] transition-colors text-sm cursor-pointer"
    >
      {text}
      <ArrowLeft size={16} />
    </button>
  );
}
