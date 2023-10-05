import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { User } from '../shared/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: Array<User> = [];
  constructor( 
    private usersService:UsersService, 
    private auth:AuthService,
    private router:Router) { }

  public fillForm(user: User): void {
    this.usersService.fillFormEvent.emit(user);
  }

  public deleteMode(user: User): void {
    delete user.deleteMode;
  }
  public deleteUser(user: User): void {
    this.usersService.deleteUser(user);
    this.router.navigate(['/login']);
    this.auth.logOut();
  }
  ngOnInit(): void {
    this.users=this.usersService.userList;
  }
}
