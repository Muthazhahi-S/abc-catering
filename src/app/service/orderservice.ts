import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrderStatus } from '../models/order-tracking.model';
import { MenuItem } from '../models/menu-item.model';
import { ErrorHandlerService } from './error.service';
import { isPlatformBrowser } from '@angular/common';
import { Restaurant } from '../models/restaurant.mode';

@Injectable({
  providedIn: 'root',
})
export class Orderservice {
  // private apiUrl =environment.apiUrl;
  private apiUrl ='json';

  
private ordersSubject = new BehaviorSubject<OrderStatus[]>(this.loadOrders());
orders$ = this.ordersSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private http:HttpClient, private errorHandler:ErrorHandlerService){
     if (isPlatformBrowser(this.platformId)) {
  }
  }

  getRestaurants():Observable<Restaurant[]>{
    console.log('Fetching:', `${this.apiUrl}/dp.json`)
    return this.http.get<{restaurants: Restaurant[]}>('json/dp.json').pipe(
      map(res => res.restaurants || []),
  catchError(this.handleError)
);
  }

getMenuByRestaurant(restaurantId:number):Observable<MenuItem[]>{
  return this.http.get<MenuItem[]>(`${this.apiUrl}/menu.json`).pipe(map(menuItems  => menuItems.filter(item=>
     item.restaurantId === restaurantId
   ))
);
}

private loadOrders(): OrderStatus[] {
//    if (isPlatformBrowser(this.platformId)) {
//   const data = localStorage.getItem('orders');
//   return data ? JSON.parse(data) :[];
  
//  }
//     return [];
   if (!isPlatformBrowser(this.platformId)) return [];
    const data = localStorage.getItem('orders');
    return data ? JSON.parse(data) : [];

}

private saveOrders(orders:OrderStatus[]){
  // localStorage.setItem('orders', JSON.stringify(orders));
  if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
}

  placedOrder(order: OrderStatus): number {
    order.id = this.ordersSubject.value.length + 1;
    order.status='pending';
    order.createdAt = new Date().toISOString();
   const list= [...this.ordersSubject.value, order];
   this.ordersSubject.next(list);
   this.saveOrders(list);
    return order.id;
  }

  // getOrders():Observable<OrderStatus[]>{
  //   return this.orders$;
  // }

  //  getOrdersByCustomer(email:string):Observable<OrderStatus[]>{
  //   return this.orders$.pipe(map(list => list.filter(o=> o.customerEmail === email)));
  //  }

  getOrderById(id: number): Observable<OrderStatus | undefined> {
    return this.orders$.pipe(map(list => list.find(o => o.id === id)));
  }

updateOrderStatus(id:number, status:string):Observable<OrderStatus[]>{
  const list = this.ordersSubject.value.map(order => order.id === id ? { ...order, status } : order);
  this.ordersSubject.next(list);
  this.saveOrders(list);
  return of(list);
}

assignPartner(orderId: number, partnerId: number){
  const updated = this.ordersSubject.value.map(order =>
     order.id === orderId ? { ...order, partnerId, status:'assigned'}: order);
  this.ordersSubject.next(updated);
  this.saveOrders(updated);
}

// common error handling
private handleError(error: HttpErrorResponse){
  let msg ='';
  if(error.status === 0){
    msg ='No internet/Json file not found';
  }else{
    msg=`Error ${error.status}: ${error.message}`;
  }
  console.error(msg);
  return throwError(()=> msg);
}



}
