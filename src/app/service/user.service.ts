import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';


export interface User{
  email:string;
  password:string;
  id:number;
  name:string;
role: 'customer' | 'admin' | 'delivery'; 

}
@Injectable({ providedIn: 'root' })
export class UserService {

  private STORAGE_KEY ='users';
  private LOGGED_USER='loggedUser';
  platformId =inject(PLATFORM_ID);
  constructor() { }

isBrowser():boolean{
  return isPlatformBrowser(this.platformId);
}
// ------------------------------
  //  Get + Save Users
  // ------------------------------
private getAllUsers(): User[] {

//   if (!this.isBrowser()) {
//     return [];
//   }
//   const data = localStorage.getItem(this.STORAGE_KEY);
// return data ? JSON.parse(data) :[];
  if (!this.isBrowser()) return [];

    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

private saveAllUsers(users: User[]){
  //  if (!this.isBrowser()) {
  //   return; 
  // }
  // localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    if (!this.isBrowser()) return;

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
}

// ------------------------------
  //  Registration
  // ------------------------------

registerUser(user: any): { success: boolean; message:string }{
  //   if (!this.isBrowser()) {
  //   return { success: false, message: 'LocalStorage not available' };
  // }
  //   const users = this.getAllUsers();



  //   const existingUser = users.find(u=> u.email === user.email);
  //   if(existingUser){
  //     return {
  //       success: false, message:'Email already registered'
  //     };
  //   }

  
  //     users.push(user);
  //     this.saveAllUsers(users);

  //     return {
  //       success:true, message:'Registration successful'
  //     };
      if (!this.isBrowser()) {
      return { success: false, message: 'LocalStorage not available' };
    }

    const users = this.getAllUsers();

    // Check if user exists
    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
      return { success: false, message: 'Email already registered' };
    }

    // Generate user ID
    user.id = users.length + 1;

    users.push(user);
    this.saveAllUsers(users);

    return { success: true, message: 'Registration successful' };
    }

 // ------------------------------
  //  Login
  // ------------------------------

    login(email:string, password:string):{success: boolean; message :string; user?: User}{

  //      if (!this.isBrowser()) {
  //  return { success: false, message: 'LocalStorage not available' };
  // }
  //     const users = this.getAllUsers();
  //     const user = users.find(u=>u.email === email);

  //     if(!user){
  //       return {
  //         success:false, message:'Email not found'
  //       };

  //     }
     
  //     if(user.password !== password){
  //   return { success:false, message:'Incorrect password!'};
  // } 
   
  //   localStorage.setItem(this.LOGGED_USER, JSON.stringify(user));
  //   return{success:true, message:'Login successful', user};
     if (!this.isBrowser()) {
      return { success: false, message: 'LocalStorage not available' };
    }

    const users = this.getAllUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      return { success: false, message: 'Email not found' };
    }

    if (user.password !== password) {
      return { success: false, message: 'Incorrect password!' };
    }

    localStorage.setItem(this.LOGGED_USER, JSON.stringify(user));

    return { success: true, message: 'Login successful', user };
    }

  // ------------------------------
  //  Get Logged User
  // ------------------------------
    getLoggedInUser(): User | null {
//        if (!this.isBrowser()) {
//     return null;
//   }
      
//  const data = localStorage.getItem(this.LOGGED_USER);
//   return data ? JSON.parse(data) as User : null;
  if (!this.isBrowser()) return null;

    const data = localStorage.getItem(this.LOGGED_USER);
    return data ? (JSON.parse(data) as User) : null;
      
    }

 
    getLoggedUserDetails(): User | null {
  //      if (!this.isBrowser()) {
  //   return null; 
  // }
  //  const data = localStorage.getItem(this.LOGGED_USER);
  // return data ? JSON.parse(data) : null;
  return this.getLoggedInUser(); // No need for duplicate logic
    
    }


  // ------------------------------
  //  Logout
  // ------------------------------

    logout(){
  //      if (!this.isBrowser()) {
  //   return; 
  // }
  //     localStorage.removeItem(this.LOGGED_USER);
    if (!this.isBrowser()) return;

    localStorage.removeItem(this.LOGGED_USER);
    }


  // ------------------------------
  //  Role Checks
  // ------------------------------
 isAdmin(): boolean {
    return this.getLoggedInUser()?.role === 'admin';
  }

  isCustomer(): boolean {
    return this.getLoggedInUser()?.role === 'customer';
  }

  isPartner(): boolean {
    return this.getLoggedInUser()?.role === 'delivery';
  }


}