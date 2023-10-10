import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../users/shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn=true;
  loggedUser:User={email:"123@gmail.com",password:'123123123',nickname:'asdasdasd',phone:'+995 567765542',website:'asd.com','authorized':true,"deleteMode":true};

  constructor() { }

  updateLoggedInfo=new EventEmitter<boolean>();

  logIn(){
    this.loggedIn=true;
    this.updateLoggedInfo.emit(true);
  }
  logOut(){
    this.loggedIn=false
    delete this.loggedUser.authorized;
    delete this.loggedUser.deleteMode;
    this.updateLoggedInfo.emit(false);
  }
  isAuthenticated(){
    return this.loggedIn
  }
}
