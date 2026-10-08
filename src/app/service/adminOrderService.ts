
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Orderservice } from './orderservice';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { OrderStatus } from '../models/order-tracking.model';


@Injectable({
  providedIn: 'root',
})
export class AdminOrderService {
  private apiUrl =environment.apiUrl;

  constructor(private orderService: Orderservice){

  }

  getAllOrders(){
    return this.orderService.orders$;
  }

  acceptOrder(id:number){
    this.orderService.updateOrderStatus(id,'accepted');
  }

  rejectOrder(id:number){
    this.orderService.updateOrderStatus(id, 'rejected');
  }

  updateStatus(id:number, status: string):Observable<void>{
    return this.orderService.updateOrderStatus(id, status).pipe(map((status: any) => console.log(status)));
  }
  assignPartner(orderId: number, partnerId: number){
    this.orderService.assignPartner(orderId, partnerId);
  }
}