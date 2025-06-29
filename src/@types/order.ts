export interface Order {
  id: number;
  product: string;
  image: string;
  user: string;
  date: string;
  price: string;
  paid: boolean;
  shipped: 'در حال ارسال' | 'ارسال شده' | 'ارسال نشده';
}

export type OrderItem = {
  id: number;
  image: string;
  product: string;
  quantity: number;
  price: number;
  total: number;
};


export type OrderDetails = {
  id: number;
  name: string;
  email: string;
  address: string;
  paymentMethod: string;
  status: 'در حال پردازش' | 'ارسال شده';
  summary: {
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
  };
};