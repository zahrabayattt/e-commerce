import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useOrderStore } from '@/store/use-order-shipping-store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OrderShippingDetails = () => {
  const { orderShippingDetail, setOrderShippingDetail } = useOrderStore();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOrderShippingDetail(name, value);
  };
  const handleNextStep = () => {
    const { address, city, country, postalCode, paymentMethod } = orderShippingDetail;

    if (!address || !city || !country || !postalCode || !paymentMethod) {
      toast.error('لطفاً همه فیلدها را کامل پر کنید');
      return;
    }

    navigate('/shopping-progress/summary');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <form className="flex flex-col gap-4 w-1/2 h-1/2 mt-8">
        <h3 className="font-bold">خرید</h3>

        <div className="flex flex-col space-y-1.5">
          <label htmlFor="address" className="text-sm">
            آدرس
          </label>
          <Input
            type="text"
            name="address"
            id="address"
            value={orderShippingDetail.address}
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
            value={orderShippingDetail.city}
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
            value={orderShippingDetail.country}
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
            value={orderShippingDetail.postalCode}
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
              checked={orderShippingDetail.paymentMethod === 'pasargad'}
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
          onClick={handleNextStep}
          className="bg-[#DB2777] rounded-xl"
        >
          ادامه
        </Button>
      </form>
    </div>
  );
};

export default OrderShippingDetails;
