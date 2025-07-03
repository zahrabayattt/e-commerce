import OrderShippingDetails from '@/components/OrderShippingDetails';
import OrderSummary from '@/components/OrderSummary';
import Stepper from '@/components/Stepper';
import { useState } from 'react';

const ShoppingProgress = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const nextStep = () => setCurrentStep((prev) => prev + 1);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <Stepper currentStep={currentStep} />

      {currentStep === 2 && <OrderShippingDetails nextStep={nextStep} />}

      {currentStep === 3 && <OrderSummary />}
    </div>
  );
};

export default ShoppingProgress;
