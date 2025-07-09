export type ReviewModel = {
  name: string;
  rating: number;
  comment: string;
  user: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};
type category = {
  _id: string;
  name: string;
  __v: number;
};

export type ProductModel = {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: category;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: ReviewModel[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type CreateProductPayload = {
  name: string;
  description: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
};

export type ProductResponseModel = {
  _id: string;
  name: string;
  image: string;
  quantity: number;
  category: category;
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

export type UseProductType = {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
  __v: number;
};
