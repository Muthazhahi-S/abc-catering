import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule,RouterModule,CommonModule,FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent implements OnInit {
  
loginForm!: FormGroup;
  errorMessage='';

 constructor(private fb: FormBuilder, private router: Router,private userService: UserService) {}

   ngOnInit(): void {
    
this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profileImage: ['']
    });

  }
  
get email(){
  return this.loginForm.get('email');
}
get password(){
  return this.loginForm.get('password');
}
onSubmit(): void {
 if (this.loginForm.invalid) {
  this.loginForm.markAllAsTouched();
  return;
 }
const result= this.userService.login(this.email?.value, this.password?.value);
if(!result.success){
  this.errorMessage = result.message;
  return;
}

const user = result.user;

    const role = result.user?.role;
    if (role === 'admin') {
      this.router.navigate(['/admin/dashboard']);
    } else if (role === 'customer') {
      this.router.navigate(['/customer/restaurant']);
    } else if (role === 'delivery') {
      this.router.navigate(['/delivery/dashboard']);
    }

  // this.userService.login(this.email?.value, this.password?.value).subscribe(user => {
  //     if (!user) {
  //       this.errorMessage = 'Invalid email or password';
  //       return;
  //     }

  //     // Save logged user to localStorage
  //     localStorage.setItem('loggedUser', JSON.stringify(user));

  //     // Redirect based on role
  //     const role = user.role;
  //     console.log('roles::::::::::', role)
  //     if (role === 'admin') {
  //       this.router.navigate(['/admin/dashboard']);
  //     } else if (role === 'customer') {
  //       this.router.navigate(['/customer/restaurant']);
  //     } else if (role === 'delivery') {
  //       this.router.navigate(['/delivery/dashboard']);
  //     }
  //   }, err => {
  //     console.error(err);
  //     this.errorMessage = 'Login failed';
  //   });


  }



}
