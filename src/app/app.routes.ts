import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth.routes';
import { ADMIN_ROUTES } from './admin/admin.routes';
import { CUSTOMER_ROUTES } from './customer/customer.routes';
import { DELIVERY_ROUTES } from './devery/delivery.routes';
import { AuthGuard } from './authGuard';
import { TrackingComponent } from './customer/tracking-component/tracking-component';
import { CateringLandingComponent } from './landing/catering-landing-component';

export const routes: Routes = [
  { path: '', component: CateringLandingComponent, pathMatch: 'full' },
  { path: 'auth', children: AUTH_ROUTES },
  { path: 'admin', children: ADMIN_ROUTES, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'customer', children: CUSTOMER_ROUTES, canActivate: [AuthGuard], data: { roles: ['customer'] } },
  { path: 'delivery', children: DELIVERY_ROUTES, canActivate: [AuthGuard], data: { roles: ['delivery'] } },
  { path:'tracking/:id', canActivate:[AuthGuard], component:TrackingComponent},
  { path: '**', redirectTo: 'auth/login' }
];
