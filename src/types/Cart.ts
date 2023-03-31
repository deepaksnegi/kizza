import { StaticImageData } from "next/image";

export interface Item {
  id: string;
  name: string;
  image: StaticImageData;
  size: string;
  price: number;
  quantity: number;
  total: number;
}
