import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';


declare var window: any;

@Component({
  selector: 'app-forms',
  templateUrl: './app-forms.component.html',
  styleUrls: ['./app-forms.component.scss']
})

export class HwFormsComponent implements OnInit, OnDestroy {
  constructor(private usersService: UsersService) { }

  formModal: any;
  ngOnInit(): void {
    console.log('OnInit')
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('editModel')
    )
    this.usersService.openEdit.subscribe(() => this.openModal())
    this.usersService.closeEdit.subscribe(() => this.closeModal())
  }
  openModal() {
    this.formModal.show()
  }
  closeModal() {
    this.formModal.hide()
  }
  ngOnDestroy(): void {
    console.log('onDestroy')
    this.formModal.dispose()

  }
}

