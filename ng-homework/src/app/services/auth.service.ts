import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../homework1/shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=false;
  loggedUser!:User;

  constructor() { }

  updateLoggedInfo=new EventEmitter<boolean>();

  logIn(){
    this.loggedIn=true;
    this.updateLoggedInfo.emit(true);
  }
  logOut(){
    this.loggedIn=false
    delete this.loggedUser.authorized;
    this.updateLoggedInfo.emit(false);
  }
  isAuthenticated(){
    return this.loggedIn
  }
}
