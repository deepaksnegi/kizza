import { StaticImageData } from "next/image";

export interface FoodItem {
  id: string;
  name: string;
  image: StaticImageData;
  price: {
    small: number;
    regular: number;
    large: number;
  };
}

export type Size = "small" | "regular" | "large";
