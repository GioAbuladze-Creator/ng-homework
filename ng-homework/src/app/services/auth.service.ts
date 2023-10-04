import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=false;
  constructor() { }

  updateLoggedInfo=new EventEmitter<boolean>();

  logIn(){
    this.loggedIn=true;
    this.updateLoggedInfo.emit(true);
  }
  logOut(){
    this.loggedIn=false
    this.updateLoggedInfo.emit(false);
  }
  isAuthenticated(){
    return this.loggedIn
  }
}
