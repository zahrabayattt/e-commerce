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
