import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard-component/admin-dashboard-component';
import { AdminOrdersComponent } from './admin-orders-component/admin-orders-component';
import { PartnerComponent } from './partner-component/partner-component';
import { AdminRestaurantsComponent } from './admin-restaurants-component/admin-restaurants-component';

export const ADMIN_ROUTES: Routes = [
    { path: 'dashboard', component: AdminDashboardComponent }
];
