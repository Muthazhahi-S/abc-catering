import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Orderservice } from '../../service/orderservice';
import { FormsModule } from '@angular/forms';
import { OrderStatus } from '../../models/order-tracking.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-orders-component',
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './admin-orders-component.html',
  styleUrl: './admin-orders-component.scss',
})
export class AdminOrdersComponent implements OnInit, OnDestroy {
orders?: OrderStatus[]=[];
error='';
sub = new Subscription();
deliveryPartners =[{id:101, name:'DP 101'},{id:102,name:'DP 102'}];
constructor(private orderService:Orderservice){
  this.sub.add(this.orderService.orders$.subscribe({
    next: (list) => {
      this.orders = list;
    },
    error :(err) => {
      this.error ='Failed to load orders';
      console.error(err);
    }
  })
);
}
ngOnInit(): void {
  this.orderService.orders$.subscribe(res =>{ this.orders = res});
}
 updateStatus(orderId:number, status: string){
try{
 this.orderService.updateOrderStatus(orderId, status);
}catch (err){
  this.error ='Unable to update status';
  console.error(err);
}
 
 }

 assignPartner(orderId:number, partnerId: number){
  
 if (!partnerId) {
    alert('Please select a partner before assigning.');
    return;
  }

  try{
    const list = this.orderService['ordersSubject'].value.map(o=> o.id === orderId ? { ...o, partnerId, status:'ASSIGNED_TO_DP'} : o);
    this.orderService['ordersSubject'].next(list);
    localStorage.setItem('orders', JSON.stringify(list));
  }catch (err){
this.error = 'Unable to assign partner';
console.error(err);
  }
 }
ngOnDestroy(): void {
  this.sub.unsubscribe();
}
}
