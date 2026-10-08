import { CommonModule, Location } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';
import { CartService } from '../../service/cartservice';
import { SearchService } from '../../service/searchService';
import { count } from 'console';

@Component({
  selector: 'app-header-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent implements OnInit{
@Output() searchChanged = new EventEmitter<string>();
  cartCount =0;
  userEmail:string | null = null;
  menuOpen = false;
userInitial: string | null = null;
  isAdmin!: boolean;
  isCustomer!: boolean;
  isPartner!: boolean;
constructor(private router: Router,private userService: UserService, private cartService:CartService, private searchService:SearchService,
  private location: Location
) {

}
ngOnInit(): void {
  const user = this.userService.getLoggedUserDetails();
  this.isAdmin =this.userService.isAdmin();
this.isCustomer = this.userService.isCustomer();
this.isPartner = this.userService.isPartner();

  this.userEmail = user ? user.email : null;


  this.cartService.totalQuantity.subscribe(count => {
      this.cartCount = count;
});

}

toggleMenu(){
  this.menuOpen = !this.menuOpen;
}
  onLogin() {
    this.router.navigate(['/auth/login']);
  }
  logout(){
    this.userService.logout();
    this.cartService.clearCart();
     this.menuOpen = false;
     this.userEmail = null;
    this.router.navigate(['/auth/login']);
  }


goBack() {
    this.location.back(); 
  }


onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();
    this.searchService.setSearchTerm(value);
    this.searchChanged.emit(value);
  }
goToAdmin(){
  this.router.navigate(['/admin/dashboard']);
}
goToPartner(){
  this.router.navigate(['/delivery/dashboard']);
}

@HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-profile') && !target.closest('.dropdown-menu')) {
      this.menuOpen = false;
    }
  }

}
