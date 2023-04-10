export interface Order {
  name: string;
  phone: string;
  address: string;
  paymentOption: "payOnDelivery" | "payNow";
  total: number;
}
