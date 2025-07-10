import { useCartStore } from '@/store/use-cart-store';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleProceedToOrderPage = () => {
    navigate('/shopping-progress/address');
  };

  return (
    <div className="bg-[#EEEFF1] w-full">
      <div className="w-2/3 py-4 mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center mt-10 mx-auto">سبد خرید شما خالی است</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex justify-around items-center border-1 rounded-lg py-4 my-2"
            >
              {/* Right: Product Card */}
              <div className="flex items-center gap-4 space-y-1 text-s w-3/4">
                <img
                  src={item.productImage}
                  alt="{image.title}"
                  className="w-18 h-18 bg-white p-1 object-contain object-center"
                />
                <div className="px-2 flex flex-col gap-2">
                  <p className="text-pink-500 font-medium leading-4">{item.productTitle}</p>
                  <p className="text-gray-700">{item.productBrand}</p>
                  <p className="text-black font-bold">{item.price.toLocaleString()} تومان</p>
                </div>
              </div>
              {/* Left: Quantity + Delete */}
              <div className="flex justify-center items-center gap-3 min-w-[80px]">
                {item.countInStock > 0 ? (
                  <select
                    className="bg-white border border-gray-300 rounded px-2 py-1 text-sm"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                  >
                    {Array.from({ length: item.countInStock }, (_, i) => i + 1).map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p className="text-red-500 text-sm mt-1">ناموجود</p>
                )}
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.productId)}
                >
                  <Trash2 size={19} />
                </button>
              </div>
            </div>
          ))
        )}
        {/* Total */}
        <div className="px-8 mt-6">
          <p className="text-sm mb-1">تعداد ({totalQuantity})</p>
          <p className="font-bold text-lg">{totalPrice.toLocaleString()} تومان</p>
          <button
            type="submit"
            onClick={handleProceedToOrderPage}
            className="mt-3 bg-pink-600 hover:bg-pink-700 text-white w-1/3 px-8 py-2 rounded-full text-sm"
          >
            تکمیل خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
