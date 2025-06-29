import OrderShippingDetails from '@/components/OrderShippingDetails';
import OrderSummary from '@/components/OrderSummary';
import Stepper from '@/components/Stepper';
import { useState } from 'react';
import type { ICartItem } from '@/@types/cart';

const ShoppingProgress = ({ cartItems }: { cartItems: ICartItem[] }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [formValues, setFormValues] = useState({
    address: '',
    city: '',
    country: '',
    postalCode: '',
    paymentMethod: 'pasargad',
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <Stepper currentStep={currentStep} />

      {currentStep === 2 && (
        <OrderShippingDetails handleChangeValues={handleChangeValues} nextStep={nextStep} />
      )}

      {currentStep === 3 && <OrderSummary cartItems={cartItems} orderShippingDetail={formValues} />}
    </div>
  );
};

export default ShoppingProgress;
