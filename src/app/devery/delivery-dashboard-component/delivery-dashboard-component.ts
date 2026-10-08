import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeliveryPartner, OrderStatus } from '../../models/order-tracking.model';
import { DeliveryPartnerService } from '../../service/delivery-order.service';
import { forkJoin, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-delivery-dashboard-component',
  imports: [CommonModule],
  templateUrl: './delivery-dashboard-component.html',
  styleUrl: './delivery-dashboard-component.scss',
})
export class DeliveryDashboardComponent implements OnInit {

  partner!: Observable<DeliveryPartner>;
  orders!:Observable<OrderStatus[]>;
partnerId!:number;
  constructor(private partnerService:DeliveryPartnerService,private router:Router){}
  ngOnInit(): void {
  const partnerId = 1;
this.partner = this.partnerService.getPartnerById(partnerId);
  this.orders = this.partnerService.getAssignedOrders(partnerId);
  }

  updateStatus(orderId:number, status:string){
    this.partnerService.updateStatus(orderId, status);
      this.router.navigate(['/tracking', orderId]);
  }

}
