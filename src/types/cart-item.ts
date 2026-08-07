import { Tour } from "./tour";

export interface CartItem {
  product: Tour;
  date: Date,
  people: number;
  quantity: number;
}