import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: Array<User> = [];
  constructor( private usersService:UsersService) { }

  public fillForm(user: User): void {
    this.usersService.fillFormEvent.emit(user);
    this.usersService.openEdit.emit();
  }

  public deleteMode(user: User): void {
    delete user.deleteMode;
  }
  public deleteUser(user: User): void {
    this.usersService.deleteUser(user);
  }
  ngOnInit(): void {
    this.users=this.usersService.userList;
  }
}
