export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  date: string;
  image: string;
  brand: string;
}

export  const products: Product[] = [
  {
    id: "1",
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. دارای A16 Bionic و سیستم ProMotion",
    price: 100000,
    date: "۳۱ مرداد ۱۴۰۳",
    image: "https://picsum.photos/200/300",
    brand:"Apple"
  },
  {
    id: "2",
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. دارای A16 Bionic و سیستم ProMotion",
    price: 100000,
    date: "۳۱ مرداد ۱۴۰۳",
    image: "https://picsum.photos/200/300",
    brand:"Apple"
  },
  {
    id: "3",
    title: "Samaung S25 Ultra",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. دارای A16 Bionic و سیستم ProMotion",
    price: 200000,
    date: "۳۱ مرداد ۱۴۰۳",
    image: "https://picsum.photos/200/300",
    brand:"Samsung"
  },
  // ... سایر آیتم‌ها
];
