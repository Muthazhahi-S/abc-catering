import { Routes } from "@angular/router";
import { RegisterComponent } from "./register-component/register-component";
import { LoginComponent } from "./login-component/login-component";

export const AUTH_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
]