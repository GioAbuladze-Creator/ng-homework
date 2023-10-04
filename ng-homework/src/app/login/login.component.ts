import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../homework1/shared/users.service';
import { User } from '../homework1/shared/user.interface';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare var window:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  user!:User;
  invalidLogin:boolean=false;
  constructor(
    private fb:FormBuilder,
    private usersService:UsersService,
    private router:Router,
    private authService:AuthService
  ){}

  form=this.fb.group({
    email:['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password:['', [Validators.required]]
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
  
  onLogIn(){
    let found=this.usersService.userList.find((user)=>{return user.email==this.email?.value&&user.password==this.password?.value})
    if(found){
      this.invalidLogin=false;
      this.authService.logIn();
      found.authorized=true;
      this.user=found;
      console.log(found)
      this.form.reset();
      this.router.navigate(['/users'])
    }else{
      this.form.markAllAsTouched();
      if(this.email?.value&&this.password?.value){
        this.invalidLogin=true;
      }
    }
  }
}
