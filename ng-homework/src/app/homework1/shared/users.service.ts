import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: User[] = []
  constructor() { }

  public addUser(user: User): void {
    this.userList.push(user)
  }
  public notifyDelete=new EventEmitter<void>();
  public fillFormEvent=new EventEmitter<User>();
  public deleteUser(user: User): void {
    this.userList.splice(this.userList.indexOf(user), 1);
    this.notifyDelete.emit();
  }
}
