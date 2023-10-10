import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Subscription } from 'rxjs';


declare var window: any;

@Component({
  selector: 'app-forms',
  templateUrl: './app-forms.component.html',
  styleUrls: ['./app-forms.component.scss']
})

export class HwFormsComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) { }
  oESubscription!: Subscription;
  cESubscription!: Subscription;
  formModal: any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('editModel')
    )
    this.oESubscription=this.usersService.openEdit.subscribe(() => this.openModal())
    this.cESubscription=this.usersService.closeEdit.subscribe(() => this.closeModal())
  }
  openModal() {
    this.formModal.show()
  }
  closeModal() {
    this.formModal.hide()
  }
  ngOnDestroy(): void {
    this.oESubscription.unsubscribe()
    this.cESubscription.unsubscribe()
  }
}

