export  interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  brand?: string;
  rating?: number;
  stock?: number;
  reviews?: number;
  updatedAt?: string;
  description?: string;
}

export const products = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    price: 120000,
    imageUrl: "../../assets/images/iphone 14.jpg",
    brand: "Apple",
    rating: 5,
    stock: 10,
    reviews: 300,
    updatedAt: "لحظاتی پیش",
    description: "گوشی پرچم‌دار اپل با نمایشگر ProMotion"
  },
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    price: 120000,
    imageUrl: "../../assets/images/iphone 14.jpg",
    brand: "Apple",
    rating: 5,
    stock: 10,
    reviews: 300,
    updatedAt: "لحظاتی پیش",
    description: "گوشی پرچم‌دار اپل با نمایشگر ProMotion"
  },
  {
  id: 3,
    title: "iPhone 14 Pro Max",
    price: 120000,
    imageUrl: "../../assets/images/iphone 14.jpg",
    brand: "Apple",
    rating: 5,
    stock: 10,
    reviews: 300,
    updatedAt: "لحظاتی پیش",
    description: "گوشی پرچم‌دار اپل با نمایشگر ProMotion"
  },
  {
    id: 4,
    title: "iPhone 14 Pro Max",
    price: 120000,
    imageUrl: "../../assets/images/iphone 14.jpg",
    brand: "Apple",
    rating: 5,
    stock: 10,
    reviews: 300,
    updatedAt: "لحظاتی پیش",
    description: "گوشی پرچم‌دار اپل با نمایشگر ProMotion"
  },
  {
    id: 5,
    title: "MacBook Air M2",
    price: 140000,
    imageUrl: "/images/macbook.jpg",
    brand: "Apple",
    rating: 4.9,
    stock: 8,
    reviews: 250,
    updatedAt: "امروز",
    description: "لپ‌تاپ فوق سبک با قدرت بالا"
  },
  {
    id: 6,
    title: "Lenovo Legion 5",
    price: 125000,
    imageUrl: "/images/lenovo.jpg",
    brand: "Lenovo",
    rating: 4.6,
    stock: 6,
    reviews: 130,
    updatedAt: "۱ هفته پیش",
    description: "لپ‌تاپ گیمینگ با گرافیک RTX"
  },
  {
    id: 7,
    title: "Asus ROG Phone 7",
    price: 98000,
    imageUrl: "/images/asus.jpg",
    brand: "Asus",
    rating: 4.7,
    stock: 7,
    reviews: 95,
    updatedAt: "۵ روز پیش",
    description: "گوشی مخصوص گیم با خنک‌کننده فعال"
  },
  {
    id: 8,
    title: "Huawei Mate 50 Pro",
    price: 105000,
    imageUrl: "/images/huawei.jpg",
    brand: "Huawei",
    rating: 4.3,
    stock: 11,
    reviews: 140,
    updatedAt: "دیروز",
    description: "گوشی پرچم‌دار هواوی با دوربین XMAGE"
  },
  {
    id: 9,
    title: "Google Pixel 8 Pro",
    price: 99000,
    imageUrl: "/images/pixel.jpg",
    brand: "Google",
    rating: 4.6,
    stock: 9,
    reviews: 170,
    updatedAt: "امروز",
    description: "گوشی گوگل با Android خام و دوربین هوشمند"
  },
  {
    id: 10,
    title: "Dell XPS 13",
    price: 150000,
    imageUrl: "/images/dell.jpg",
    brand: "Dell",
    rating: 4.8,
    stock: 4,
    reviews: 110,
    updatedAt: "۴ ساعت پیش",
    description: "لپ‌تاپ حرفه‌ای با نمایشگر InfinityEdge"
  },
  
];
