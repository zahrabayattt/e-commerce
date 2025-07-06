export type ReviewModel = {
  name: string;
  rating: number;
  comment: string;
  user: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
};
type category={
  _id :string,
  name :string,
  __v:number,

}

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
