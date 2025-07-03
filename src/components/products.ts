export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Apple iPhone 14 Pro',
    image: '@/assets/images/auth-light.png',
    price: 10000000,
  },
  {
    id: 2,
    title: 'Apple iPad Pro 12.9-inch (M2)',
    image: '/images/ipadpro.jpg',
    price: 8500000,
  },
  {
    id: 3,
    title: 'Apple Watch Series 9',
    image: '/images/watchseries9.jpg',
    price: 2700000,
  },
  {
    id: 4,
    title: 'AirPods Pro (2nd gen)',
    image: '/images/airpodspro2.jpg',
    price: 1450000,
  },
  {
    id: 5,
    title: 'Apple MacBook Air 15 (M2)',
    image: '/images/macbookair15.jpg',
    price: 32500000,
  },
  {
    id: 6,
    title: 'Apple TV 4K (2023)',
    image: '/images/appletv4k.jpg',
    price: 850000,
  },
];
