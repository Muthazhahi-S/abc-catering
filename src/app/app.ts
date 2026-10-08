import { CommonModule, Location } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer-component/footer-component';
import { HeaderComponent } from './layout/header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,FooterComponent,HeaderComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('food_app');

  showLayout = true;
  isLandingPage = false;

  constructor(private router: Router, private location: Location) {
    this.updateLayout(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLayout(event.urlAfterRedirects);
      }
    });
  }

  goBack() {
    this.location.back();
  }

  goToAdmin() {
    this.router.navigate(['/admin/dashboard']);
  }

  goToPartner() {
    this.router.navigate(['/delivery/dashboard']);
  }

  private updateLayout(url: string) {
    const pathname = url.split(/[?#]/, 1)[0];
    this.isLandingPage = pathname === '/' || pathname === '';
    this.showLayout =
      !this.isLandingPage &&
      !pathname.startsWith('/auth') &&
      !pathname.startsWith('/admin') &&
      !pathname.startsWith('/delivery');
  }
}
