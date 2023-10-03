import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

declare var window:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(
    private fb:FormBuilder,
  ){}

  form=this.fb.group({
    email:['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password:['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{7,}$/)]]
  })
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }
  formModal:any;
  ngOnInit(): void {
    this.formModal=new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )
  }
  openModal(){
    this.formModal.show()
  }
  closeModal(){
    this.formModal.hide()
  }
  onLogIn(){}
}
