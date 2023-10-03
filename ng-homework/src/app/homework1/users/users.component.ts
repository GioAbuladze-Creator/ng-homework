import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: Array<any> = [];
  constructor( private usersService:UsersService) { }

  public fillForm(user: any): void {
    this.usersService.fillFormEvent.emit(user)
  }

  public deleteMode(user: any): void {
    delete user.deleteMode;
  }
  public deleteUser(user: any): void {
    this.usersService.deleteUser(user);
  }
  ngOnInit(): void {
    this.users=this.usersService.userList;
  }
}
