export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  date: string;
  image: string;
}

export  const products: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. دارای A16 Bionic و سیستم ProMotion",
    price: "100,000",
    date: "۳۱ مرداد ۱۴۰۳",
    image: "assets/images/iphone.png",
  },
  {
    id: 2,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است. دارای A16 Bionic و سیستم ProMotion",
    price: "100,000",
    date: "۳۱ مرداد ۱۴۰۳",
    image: "./",
  },
  // ... سایر آیتم‌ها
];
