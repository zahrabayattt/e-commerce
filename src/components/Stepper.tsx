export interface IStepper {
  currentStep: number;
}
const steps = ['ورود', 'آدرس', 'خلاصه خرید'];
const Stepper = ({ currentStep }: IStepper) => {
  return (
    <div className="flex justify-center items-center gap-5 h-7">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <p className={`text-[#22C55E] text-sm ${index >= currentStep ? 'text-black' : ''}`}>
              {step}
            </p>
            {index < currentStep && <input type="checkbox" checked readOnly className="checkbox" />}
          </div>
          {index < steps.length - 1 && <div className="w-30 h-0.5 bg-[#22C55E] mx-2" />}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
