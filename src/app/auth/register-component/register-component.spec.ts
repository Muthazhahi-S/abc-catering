import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register-component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
it('should initialize form with empty values', () => {
    const form = component.registerForm;
    expect(form).toBeTruthy();
    expect(form.get('name')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
    expect(form.get('password')?.value).toBe('');
    expect(form.get('confirmPassword')?.value).toBe('');
    expect(form.get('role')?.value).toBe('');
  });

it('should mark form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalse();
  });

  it('should validate email format', () => {
    const emailControl = component.registerForm.get('email');
    emailControl?.setValue('invalidEmail');
    expect(emailControl?.invalid).toBeTrue();

    emailControl?.setValue('valid@example.com');
    expect(emailControl?.valid).toBeTrue();
  });

it('should validate password strength', () => {
    const passwordControl = component.registerForm.get('password');
    passwordControl?.setValue('weak');
    expect(passwordControl?.invalid).toBeTrue();

    passwordControl?.setValue('Strong@123');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('should validate password mismatch', () => {
    component.registerForm.get('password')?.setValue('Strong@123');
    component.registerForm.get('confirmPassword')?.setValue('Strong@124');
    expect(component.registerForm.errors?.['passwordMismatch']).toBeTrue();
  });

 it('should enable submit button only when form is valid', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeTrue();

    component.registerForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Strong@123',
      confirmPassword: 'Strong@123',
      role: 'customer'
    });
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

it('should call onSubmit when form is valid and submitted', () => {
    spyOn(component, 'onSubmit');

    component.registerForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Strong@123',
      confirmPassword: 'Strong@123',
      role: 'customer'
    });

    const formElement = fixture.debugElement.query(By.css('form')).nativeElement;
    formElement.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
