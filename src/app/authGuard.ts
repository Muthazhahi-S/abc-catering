import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean{
    
const user = this.userService.getLoggedInUser();
    if (!user) {
      this.router.navigate(['/auth/login']);
      return false;
    }

  const expectedRoles  = route.data['roles'] as string[];
  console.log(expectedRoles) 
    if (expectedRoles && !expectedRoles.includes(user.role)) {
      this.router.navigate(['/auth/login']); 
      return false;
    }
    return true;
 
  }
}