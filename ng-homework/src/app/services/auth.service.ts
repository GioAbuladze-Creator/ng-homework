import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=false;
  constructor() { }

  logIn(){
    this.loggedIn=true;
    console.log('sasasa')
  }
  logOut(){
    this.loggedIn=false
  }
  isAuthenticated(){
    return this.loggedIn
  }
}
