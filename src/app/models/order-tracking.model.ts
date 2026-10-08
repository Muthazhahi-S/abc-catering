import { CartItem } from "./cart-item.model";
import { MenuItem } from "./menu-item.model";

export interface OrderStatus{
    

 id: number;
  customerName: string;
  phone: string;
  address: string;
  status: string;
  items: any[];
  amount: number;
assignedTo:number | null;
restaurantId:number;
  restaurantName?:string;
partnerId: number | null;
createdAt:string;
customerEmail:string;

}

export interface paymentInfo{
  method: string;
  price:number;
   paid: boolean;
}
export interface OrderItem{
  name:string;
  qty:number;
  price:number;
}

export interface TrackingStatus{
  orderId:number;
  currentstatus: string;
  lastUpdated: string;
}
export interface DeliveryPartner{
  id: number;
  name:string;
  phone:string;
  vehicle: string; 
  active?: boolean;
role:'delivery';
}