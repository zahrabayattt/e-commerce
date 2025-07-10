import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 dark:bg-[#0F0F10] px-4 py-10 text-center">
      <h1 className='font-bold text-9xl text-pink-700'>404</h1>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">صفحه پیدا نشد!</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
        متأسفانه آدرسی که وارد کردید وجود ندارد یا حذف شده است.
      </p>

      <div className="flex gap-4 mt-6 ">
        <Button className='dark:bg-gray-800' variant="outline" onClick={() => navigate(-1)}>
          بازگشت به صفحه قبل
        </Button>
        <Button
          className="bg-pink-600  text-white hover:bg-pink-700"
          onClick={() => navigate('/')}
        >
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </div>
    
  );
};

export default ErrorPage;