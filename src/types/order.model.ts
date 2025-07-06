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

export interface IOrderItem {
  name: string;
  qty: number;
  price: number;
  image: string;
  product: string;
  _id: string;
}

export type OrderRowModel = {
  _id: string;
  name: string;
  image: string;
  user: string;
  createdAt: string;
  price: number;
  qty: number;
  isPaid: boolean;
  isDelivered: boolean;
};

export type UserOrder = {
  _id: string;
  user: string;
  orderItems: IOrderItem[];
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AdminOrder = {
  _id: string;
  user: {
    _id: string;
    username: string;
  };
  orderItems: IOrderItem[];
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
};
