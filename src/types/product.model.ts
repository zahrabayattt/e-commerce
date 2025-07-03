export type ReviewModel = {
  name: string;
  rating: number;
  comment: string;
  user: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductModel = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: ReviewModel[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
