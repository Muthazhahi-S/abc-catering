import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminOrderService } from '../../service/adminOrderService';
import { OrderStatus } from '../../models/order-tracking.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-component',
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-dashboard-component.html',
  styleUrl: './admin-dashboard-component.scss',
})
export class AdminDashboardComponent implements OnInit {

  totalOrders = 0;
  pendingOrders =0;
  orders: OrderStatus[]=[];
  partnerList =[
    {id:1,name:'Ramesh'},{id:2,name:'Suresh'},{id:3,name:'Karan Kumar'}
  ]
  constructor(private adminOrderService: AdminOrderService, private router:Router){}
  ngOnInit(): void {
    this.loadOrder();
    
  }

  loadOrder(){
     this.adminOrderService.getAllOrders().subscribe(res=>{
      this.orders = res;
       this.totalOrders = res.length;
       this.pendingOrders = res.filter(o => o.status?.toLowerCase() === 'pending').length;
      console.log(this.pendingOrders)
     });
  }
  updateStatus(id:number, status: string) {
    console.log(status)
    this.adminOrderService.updateStatus(id, status)
.subscribe(() => {
      this.loadOrder();
    });

    
  }
  assignPartner(orderId: number, partnerId: string){
    const partnerIdNum =Number(partnerId);
    if(partnerIdNum > 0){

    this.adminOrderService.assignPartner(orderId, Number(partnerId));
    alert('Partner assigned successfully!');
    }
  }
  trackOrder(orderId: number){
    console.log('admin', orderId)
    this.router.navigate(['/tracking', orderId]);
  }


}
