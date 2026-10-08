import { Routes } from '@angular/router';
import { DeliveryDashboardComponent } from './delivery-dashboard-component/delivery-dashboard-component';
import { DeliveredOrdersComponent } from './delivered-orders-component/delivered-orders-component';
import { PickupComponent } from './pickup-component/pickup-component';

export const DELIVERY_ROUTES: Routes = [
    { path: 'dashboard', component: DeliveryDashboardComponent }

];
