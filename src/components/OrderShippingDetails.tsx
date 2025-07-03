import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useOrderStore } from '@/store/orderShippingStore';

interface IOrderShippingDetails {
  nextStep: () => void;
}

const OrderShippingDetails = ({ nextStep }: IOrderShippingDetails) => {
  const { setOrderShippingDetail } = useOrderStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrderShippingDetail(name, value);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <form className="flex flex-col gap-4 w-[450px] mt-8">
        <h3 className="font-bold">خرید</h3>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="address" className="text-sm">
            آدرس
          </label>
          <Input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            placeholder="آدرس را وارد نمایید"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="city" className="text-sm">
            شهر
          </label>
          <Input
            type="text"
            name="city"
            id="city"
            onChange={handleChange}
            placeholder="شهر را وارد نمایید"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="country" className="text-sm">
            کشور
          </label>
          <Input
            type="text"
            name="country"
            id="country"
            onChange={handleChange}
            placeholder="کشور را وارد نمایید"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="postalCode" className="text-sm">
            کدپستی
          </label>
          <Input
            type="text"
            name="postalCode"
            id="postalCode"
            onChange={handleChange}
            placeholder="کدپستی را وارد نمایید"
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="payment" className="text-sm text-[#58616C] mb-4">
            روش پرداخت
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="paymentMethod"
              value="pasargad"
              defaultChecked
              onChange={handleChange}
              className="hidden"
            />
            <div className="w-3 h-3 rounded-full bg-[#DB2777]" />
            <p className="text-xs">درگاه پرداخت پاسارگاد</p>
          </label>
        </div>

        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={nextStep}
          className="bg-[#DB2777] rounded-xl"
        >
          ادامه
        </Button>
      </form>
    </div>
  );
};

export default OrderShippingDetails;
