import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User, UserService } from '../../service/user.service';

@Component({
  selector: 'app-register-component',
  imports: [CommonModule, RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent implements OnInit{
registerForm!: FormGroup;
errorMessage='';
  constructor(private fb:FormBuilder, private router:Router, private userService:UserService){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required,strongPasswordValidator]],
      confirmPassword:['', Validators.required],
      role:['', Validators.required]
    },
  {validators:matchPasswordValidator}
);

  }
  get name(){
    return this.registerForm.get('name');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
get role(){
  return this.registerForm.get('role');
}
  onSubmit(){
  console.log('Form submitted', this.registerForm.value);
if(this.registerForm.invalid){
  this.registerForm.markAllAsTouched();
  return;
}
const user ={
  
id: Date.now(),
    name: this.name?.value,
    email: this.email?.value,
    password: this.password?.value,
    role: this.role?.value


}
const result= this.userService.registerUser(user);
if(!result.success){
  this.errorMessage = result.message;
  return;
}
console.log(this.role?.value, result)
    alert('Registration successful!');
      this.router.navigate(['/auth/login']).then(success => console.log('Navigation success:', success));
   
  }
 
}

export function strongPasswordValidator(control:AbstractControl):ValidationErrors | null{
  const value =control.value;
  if(!value) return null;
  const hasUpper =/[A-Z]/.test(value);
  const hasLower =/[a-z]/.test(value);
  const hasNumber =/[0-9]/.test(value);
  const hasSymbol =/[@$!%*?&]/.test(value);
  const minLength =value.length >=8;
  return hasUpper && hasLower && hasNumber && hasSymbol && minLength ? null :{weekPassword:true};
}

export function matchPasswordValidator(form:FormGroup){
  const pass = form.get('password')?.value;
  const confirm = form.get('confirmPassword')?.value;
  return pass === confirm ? null : {passwordMismatch:true};
}