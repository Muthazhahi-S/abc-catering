import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Orderservice } from '../../service/orderservice';
import { CartService } from '../../service/cartservice';
import { SearchService } from '../../service/searchService';
import { FilterMenuPipe, HighlightPipe } from '../../hightlight.pipe';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-menu-component',
  imports: [CommonModule,RouterModule,HighlightPipe,FilterMenuPipe],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent implements OnInit{
restaurant: any;
loading = true;

  filteredMenu: any[] = [];
  searchTerm = '';
menuItems: MenuItem[]=[];
restaurantId!:number;
constructor(private route: ActivatedRoute, private orderService:Orderservice, private cartService:CartService,private searchService:SearchService,
  private cd: ChangeDetectorRef, private router: Router
){}

ngOnInit(): void {
   this.restaurantId = Number (this.route.snapshot.paramMap.get('id'));
   console.log(this.restaurantId);
  this.orderService.getMenuByRestaurant(this.restaurantId).subscribe(res=>{
    this.menuItems =res;
    console.log('menu compoents list',this.menuItems)
    this.filteredMenu = this.menuItems || [];
      this.loading =false;
      this.cd.detectChanges();
  })

this.searchService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterMenu();
    });

}

  filterMenu() {
    if (!this.restaurant) return;
    this.filteredMenu = this.restaurant.menu.filter((item:any) =>
      item.name.toLowerCase().includes(this.searchTerm)
    );
  }

addToCart(item:MenuItem){
  console.log('Clicked cart', item);
  this.cartService.addToCart({
    id: item.id,
    name:item.name,
    price:item.price,
    qty:1,
    img:item.image
  });
  
}

getStars(rating: number): { icon: string; color: string }[] {
  const stars: { icon: string; color: string }[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  let colorClass = '';
  if (rating >= 4) {
    colorClass = 'text-success';
  } else if (rating >= 3) {
    colorClass = 'text-warning'; 
  } else {
    colorClass = 'text-danger';
  }

  for (let i = 0; i < fullStars; i++) {
    stars.push({ icon: 'bi bi-star-fill', color: colorClass });
  }

  if (hasHalfStar) {
    stars.push({ icon: 'bi bi-star-half', color: colorClass });
  }

  while (stars.length < 5) {
    stars.push({ icon: 'bi bi-star', color: colorClass });
  }

  return stars;
}

}
