import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit{
  loggedInfo!:Subscription;
  constructor(
    private auth: AuthService,
  ) { }
  loggedIn=false;
  logOut(){

  }
  ngOnInit(): void {
    this.loggedIn=this.auth.isAuthenticated();
    this.loggedInfo = this.auth.updateLoggedInfo.subscribe({
      next:(status:boolean)=>this.loggedIn=status
    })
  }
  

}
