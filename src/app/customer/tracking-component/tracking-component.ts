import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Orderservice } from '../../service/orderservice';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { OrderStatus } from '../../models/order-tracking.model';

@Component({
  selector: 'app-tracking-component',
  imports: [RouterModule,CommonModule],
  templateUrl: './tracking-component.html',
  styleUrls: ['./tracking-component.scss'],
})
export class TrackingComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
   order!: OrderStatus | undefined;
  customerName:string ='';
  totalAmount :number =0;
  currentStep =1;
  currentStatusIndex =0;
  statuses=['pending','accepted','cooking','packed','out-for-delivery','delivered'];
refreshSub!: Subscription;
orderId!: number;
  constructor(private orderService:Orderservice, private route: ActivatedRoute,private cd: ChangeDetectorRef,private router: Router){}
ngOnInit(): void {

  this.orderId = this.getOrderId();
  this.loadOrder();

}

getOrderId(): number {
 const id = this.route.snapshot.paramMap.get('id');
  return id ? Number(id) : 0
}
loadOrder(): void{ 
this.orderService.getOrderById(this.orderId)
    .pipe(takeUntil(this.destroy$))
    .subscribe(order => {
      
      this.order = order;
      console.log('tracking order status', this.order?.status)
    });

}
isStepCompleted(step:string):boolean{
  if(!this.order) return false;
  const currentIndex = this.statuses.indexOf(this.order.status);
  const stepIndex = this.statuses.indexOf(step);
  return stepIndex <= currentIndex;
}
  ngOnDestroy(): void {
    if(this.refreshSub){
      this.refreshSub.unsubscribe();
    }
  }

}
