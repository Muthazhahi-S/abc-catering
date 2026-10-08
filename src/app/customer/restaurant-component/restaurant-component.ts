import { ChangeDetectorRef, Component } from '@angular/core';
import { Orderservice } from '../../service/orderservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';
import { SearchService } from '../../service/searchService';
import { FilterMenuPipe, HighlightPipe } from '../../hightlight.pipe';
import { Restaurant } from '../../models/restaurant.mode';


@Component({
  selector: 'app-restaurant-component',
  imports: [CommonModule,RouterModule,HighlightPipe,FilterMenuPipe],
  templateUrl: './restaurant-component.html',
  styleUrl: './restaurant-component.scss',
})
export class RestaurantComponent {
restaurants: Restaurant[] = [];
filteredRestaurants: Restaurant[] = [];
loading = true;
searchTerm ='';
  constructor(private orderService:Orderservice, private userService:UserService, private searchService:SearchService, private cd: ChangeDetectorRef){}
  ngOnInit(): void {


    
this.loadRestaurants();

    this.searchService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterRestaurants();
    });
  }

  loadRestaurants() {
    this.orderService.getRestaurants().subscribe({
      next:(data) =>{
      this.restaurants = data;
        console.log('Restaurants loaded:', this.restaurants);
      this.filteredRestaurants = [...data];
      this.loading = false;
       this.cd.detectChanges();
    },
    error:(err)=> console.error('Error loading restaurants', err)
  });
  }

  filterRestaurants() {
    this.filteredRestaurants = this.restaurants.filter(r =>
      r.name.toLowerCase().includes(this.searchTerm)
    );
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
