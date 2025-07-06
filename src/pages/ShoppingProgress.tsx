import Stepper from '@/components/Stepper';
import { useLocation, Outlet } from 'react-router-dom';

const ShoppingProgress = () => {
  const location = useLocation();

  let currentStep = 2;
  if (location.pathname.endsWith('/summary')) {
    currentStep = 3;
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <Stepper currentStep={currentStep} />
      <Outlet />
    </div>
  );
};

export default ShoppingProgress;
