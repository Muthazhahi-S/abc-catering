import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/cartservice';
import { Orderservice } from '../../service/orderservice';
import { OrderStatus } from '../../models/order-tracking.model';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-checkout-component',
  imports: [ReactiveFormsModule,RouterModule,CommonModule,FormsModule],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.scss',
})
export class CheckoutComponent implements OnInit{
checkoutForm!: FormGroup;
total =0;
items:CartItem[]=[];
totalItems =0;
discount =0;
finalAmount =0;
tax=18;
platFormFee=5;
deliveryFee= 30;
constructor(private fb: FormBuilder, private router: Router,private cartService: CartService,private orderService:Orderservice ){}
ngOnInit(): void {
  this.total = this.cartService.getTotal();
  this.checkoutForm = this.fb.group({
    name:['', Validators.required],
    phone:['', Validators.required, Validators.minLength(10)],
    address:['', Validators.required],
    landmark:['',Validators.required],
    pincode:['', Validators.required],
    state:['', Validators.required],

    payment:['upi', Validators.required]
  });
  this.cartService.cartList.subscribe(items=>{
    this.items = items;
    this.totalItems = items.reduce((a,b)=> a + b.qty, 0);
    this.total = items.reduce((a,b)=> a + (b.price * b.qty),0);
    this.discount =Math.round(this.total * 0.60);
    this.finalAmount = this.total - this.discount;

  })
}
onSubmit(){
  if(this.checkoutForm.invalid){
    this.checkoutForm.markAllAsTouched();
    return;
  }
  const orderId = Math.floor(Math.random() * 100000);
console.log(orderId);

const cartItems =this.cartService.getItems();
const totalAmount = cartItems.reduce((sum, item)=> sum + (item.price * item.qty),0);
const newOrder:OrderStatus ={
  id: Date.now(),
  customerName: this.checkoutForm.value.name,
  address: this.checkoutForm.value.address,
  items: cartItems,
  amount:this.totalPay,
  status: 'packed',
  assignedTo: null,
  restaurantId: 1,
  partnerId: null,
  createdAt: new Date().toISOString(),
  phone: this.checkoutForm.value.phone,
  customerEmail:this.checkoutForm.value.email
}
    this.orderService.placedOrder(newOrder);
  this.cartService.clearCart();

  this.router.navigate(['/customer/track-order', newOrder.id]);

}

get totalPay(){
  return(this.total + this.deliveryFee + this.platFormFee + this.tax - this.discount);
}
}
