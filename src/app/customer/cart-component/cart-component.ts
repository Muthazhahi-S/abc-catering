import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cartservice';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../models/menu-item.model';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-component',
  imports: [RouterModule],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss',
})
export class CartComponent implements OnInit{
  items:CartItem[]=[];
  total:number =0;

constructor(private cartService:CartService){}

ngOnInit(): void {
 this.cartService.cartList.subscribe(items =>{
  this.items =items;
  this.calculateTotal();
 })
}
increase(item:CartItem){
  this.cartService.increaseQty(item.id);
  this.calculateTotal();
}
decrease(item:CartItem){
  this.cartService.decreaseQty(item.id);
  this.calculateTotal();
}
remove(id:number){
  this.cartService.removeItem(id);
  this.calculateTotal();
}
calculateTotal(){
  this.total = this.cartService.getTotal();
  
}
clear(){
  this.cartService.clearCart();
}
}
