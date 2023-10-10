import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: User[] = [{email:"123@gmail.com",password:'123123123',nickname:'asdasdasd',phone:'+995 567765542',website:'asd.com','authorized':true,"deleteMode":false}]
  constructor() { }

  public addUser(user: User): void {
    this.userList.push(user)
  }
  public notifyDelete=new EventEmitter<void>();
  public fillFormEvent=new EventEmitter<User>();
  public openEdit=new EventEmitter<void>();
  public closeEdit=new EventEmitter<void>();
  public deleteUser(user: User): void {
    this.userList.splice(this.userList.indexOf(user), 1);
    this.notifyDelete.emit();
  }
}
