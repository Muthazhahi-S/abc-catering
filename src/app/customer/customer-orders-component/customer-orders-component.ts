import { Component, OnInit } from '@angular/core';
import { OrderStatus } from '../../models/order-tracking.model';
import { User, UserService } from '../../service/user.service';
import { Orderservice } from '../../service/orderservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-customer-orders-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-orders-component.html',
  styleUrl: './customer-orders-component.scss',
})
export class CustomerOrdersComponent implements OnInit{

myOrders:OrderStatus[]=[];
user:any;

  constructor(private userService:UserService, private orderService: Orderservice, private router:Router){}

  ngOnInit(): void {
    const user = this.userService.getLoggedInUser();
//  this.orderService.getOrdersByCustomer(this.user.email).subscribe(res =>{
//  this.myOrders = res;
//  });
    
  }

}
