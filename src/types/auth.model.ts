export type LoginPayloadModel = {
  email: string;
  password: string;
};

export type RegisterPayloadModel = {
  username: string;
  email: string;
  password: string;
  confirm_Password: string;
};

export type AuthResponseModel = {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
};
