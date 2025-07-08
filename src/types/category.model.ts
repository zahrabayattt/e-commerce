export type CategoryModel = {
  _id: string;
  name: string;
  __v: number;
};

export type CreateCategoryPayload = {
  name: string;
};

export type CategoryResponseModel = CategoryModel;
