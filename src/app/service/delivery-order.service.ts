import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Orderservice } from "./orderservice";
import { map, Observable } from "rxjs";
import { DeliveryPartner, OrderStatus } from "../models/order-tracking.model";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class DeliveryPartnerService {
  private apiUrl =environment.apiUrl;
  constructor(private orderService: Orderservice, private http:HttpClient){}

getPartnerById(id: number): Observable<DeliveryPartner> {
  return this.http.get<DeliveryPartner[]>(`${this.apiUrl}/deliveryPartners`).pipe(
    map(partners => partners.find(p => p.id === id)!)
  );
}

  getAssignedOrders(partnerId: number): Observable<OrderStatus[]>{
    return this.orderService.orders$.pipe(
      map((orders: any[])=> orders.filter(o=> o.partnerId === partnerId))
  );
  }

  updateStatus(orderId: number, status: string){
    this.orderService.updateOrderStatus(orderId, status);
  }

}