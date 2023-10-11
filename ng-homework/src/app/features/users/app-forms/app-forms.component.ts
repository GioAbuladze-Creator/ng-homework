import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { Subscription } from 'rxjs';
import { UsersComponent } from '../users/users.component';
import { FormComponent } from '../form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


declare var window: any;

@Component({
  selector: 'app-forms',
  templateUrl: './app-forms.component.html',
  styleUrls: ['./app-forms.component.scss'],
  standalone:true,
  imports:[
    UsersComponent,
    FormComponent,
    ReactiveFormsModule,
  ]
})

export class FormsComponent implements OnInit, OnDestroy {
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

