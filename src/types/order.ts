import type { IOrderItem, ShippingAddress } from "./order.model";

// get order type
export type GetOrder = {
  _id: string;
  user: {
    _id: string;
    username: string;
    email: string;
  };
  orderItems: IOrderItem[];
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  paymentMethod: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
  deliveredAt: string;
  paidAt: string;
};