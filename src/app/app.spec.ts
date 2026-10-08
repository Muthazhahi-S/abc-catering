import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { CateringLandingComponent } from './landing/catering-landing-component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the catering landing page at the home route', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/', CateringLandingComponent);
    const heading = harness.routeNativeElement?.querySelector('h1');
    expect(heading?.textContent).toContain('Delicious Food for Your Special Moments');
  });
});
