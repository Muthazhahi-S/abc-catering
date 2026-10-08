import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderStatus } from '../../models/order-tracking.model';
import { Subscription } from 'rxjs';
import { Orderservice } from '../../service/orderservice';

@Component({
  selector: 'app-partner-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './partner-component.html',
  styleUrl: './partner-component.scss',
})
export class PartnerComponent implements OnDestroy {


  orders?: OrderStatus[]=[];
  error ='';
  sub =new Subscription();
  partnerId=101;
  constructor(private orderService:Orderservice){

    this.sub.add(this.orderService.orders$.subscribe({
      next: (list)=> {
        this.orders = list.filter(o=> o.partnerId === this.partnerId);
      },
      error: (err)=>{
        this.error ="Failed to load orders";
        console.error(err);
      }
    }))
  }

  markPicked(orderId: number){
    try{
      this.orderService.updateOrderStatus(orderId,'DP_PICKED');
    }catch (err) {
      this.error ="Unable to mark picked";
      console.error(err);
    }
  }
  markOutForDelivery(orderId: number){
try{
  this.orderService.updateOrderStatus(orderId, 'OUT_FOR_DELIVERY');
}catch (err){
  this.error ='Unable to update to out for delivery';
  console.error(err);
}
}
  
markDelivered(orderId:number){
  try{
    this.orderService.updateOrderStatus(orderId,'DELIVERED');
  }catch (err){
    this.error = "Unable to mark delivered";
    console.error(err);
  }
}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
