export type OrderItem = {
  _id: string;
  name: string;
  qty: number;
};

export type ShippingAddress = {
  address: string;
  city: string;
  postalcode: string;
};

export type OrderModel = {
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
};

export type CreateOrderPayload = {
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
};

export type OrderResponseModel = {
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
};
