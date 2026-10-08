import { MenuItem } from "./menu-item.model";

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: number;
  image: string;
  menu: MenuItem[];
}