
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList = new BehaviorSubject<CartItem[]>([]);
private cardItems:CartItem[]=[];
 totalQuantity = this.cartList.pipe(map(items => items.reduce((total, item)=>total + item.qty,0)))

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
     if (isPlatformBrowser(this.platformId)) {
    const saved =localStorage.getItem('cart');
  }
  }

addToCart(item:CartItem){
    const existing = this.cardItems.find(i =>i.id === item.id);

    if(existing) {
      existing.qty ++;
    }
    else {
      this.cardItems.push({...item, qty: 1});
       }
       this.cartList.next(this.cardItems);
    
   
}
removeItem(itemId:number) {
this.cardItems = this.cardItems.filter(i => i.id !== itemId);
this.cartList.next(this.cardItems);
}

clearCart(){
    this.cardItems=[];
    this.cartList.next(this.cardItems);
  
}
getTotal(){
    return this.cardItems.reduce((sum,i) =>sum + (i.price * i.qty), 0);
}


getItems(){
  return this.cardItems;
}


decreaseQty(id:number){
  let item = this.cardItems.find(x => x.id === id);
  if(!item) return;
  if(item.qty >1){
    item.qty--;
  }else{
    this.removeItem(id);
  }
  this.cartList.next(this.cardItems);
}

increaseQty(id:number){
  let item = this.cardItems.find(x => x.id === id);
  if(item){
    item.qty++;
  }
  this.cartList.next(this.cardItems);
}


}
