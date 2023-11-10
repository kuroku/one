import { writable } from "svelte/store";

export interface ShoppinCartItems {
  name: string;
  price: number;
  image: string;
  id: number;
}
export const shoppingCart = writable<ShoppinCartItems[]>([])