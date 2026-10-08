
import { Injectable } from '@angular/core';
import { Orderservice } from './orderservice';
import { Observable } from 'rxjs';
import { OrderStatus } from '../models/order-tracking.model';


@Injectable({
  providedIn: 'root',
})
export class TrackingService {

    constructor(private orderService:Orderservice){}
    trackOrder(id: number) :Observable<OrderStatus | undefined>{
        return this.orderService.getOrderById(id);
    }
}