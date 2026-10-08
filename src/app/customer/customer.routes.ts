import { Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant-component/restaurant-component';
import { MenuComponent } from './menu-component/menu-component';
import { CartComponent } from './cart-component/cart-component';
import { CheckoutComponent } from './checkout-component/checkout-component';
import { TrackingComponent } from './tracking-component/tracking-component';
import { CustomerDashboardComponent } from './customer-dashboard-component/customer-dashboard-component';
import { CustomerOrdersComponent } from './customer-orders-component/customer-orders-component';


export const CUSTOMER_ROUTES: Routes = [
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'menu/:id', component: MenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'track-order/:id', component: TrackingComponent },
    // { path: 'orders', component: CustomerOrdersComponent }

];

