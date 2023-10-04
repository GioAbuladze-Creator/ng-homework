import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';


declare var window:any;

@Component({
  selector: 'app-forms',
  templateUrl: './app-forms.component.html',
  styleUrls: ['./app-forms.component.scss']
})

export class HwFormsComponent implements OnInit{
  constructor(private usersService:UsersService){}

  formModal:any;
  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
    this.usersService.openEdit.subscribe(()=>this.openModal())
    this.usersService.closeEdit.subscribe(()=>this.closeModal())
  }
  openModal(){
    this.formModal.show()
  }
  closeModal(){
    this.formModal.hide()
  }
}
