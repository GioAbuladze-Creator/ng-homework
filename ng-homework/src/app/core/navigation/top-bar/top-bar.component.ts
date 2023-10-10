import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth.service';

declare var window: any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {
  loggedInfo!: Subscription;
  formModal: any;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  loggedIn = false;
  logOut() {
    this.closeModal()
    this.auth.logOut()
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    this.loggedIn = this.auth.isAuthenticated();
    this.loggedInfo = this.auth.updateLoggedInfo.subscribe({
      next: (status: boolean) => this.loggedIn = status
    });
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('logoutModal')
    )
  }
  openModal() {
    this.formModal.show()
  }
  closeModal() {
    this.formModal.hide()
  }
  ngOnDestroy(): void {
    this.formModal = ''
  }


}
