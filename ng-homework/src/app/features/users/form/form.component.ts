import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfPassValidator } from '../shared/confirm-password.validator';
import { User } from '../shared/user.interface';
import { UsersService } from '../shared/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit,OnDestroy{
  constructor(
    private formBuilder: FormBuilder,
    private usersService:UsersService
    ) { }


  status={header:'Registration',button:'Register'}
  public form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
    password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{7,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{7,}$/)]],
    nickname: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9_]+$/)]],
    phone: ['+995 ', [Validators.required, Validators.pattern(/^\+995 \d{9}$/)]],
    website: ['', [Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
    agreementCheckbox: [false, Validators.required],
  }, { validators: ConfPassValidator })

  // getters
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }
  get confirmPassword() {
    return this.form.get('confirmPassword')
  }
  get nickname() {
    return this.form.get('nickname')
  }
  get phone() {
    return this.form.get('phone')
  }
  get website() {
    return this.form.get('website')
  }
  get agreementCheckbox() {
    return this.form.get('agreementCheckbox')
  }
  public isDisabled(): boolean {
    return this.password?.value !== this.confirmPassword?.value || !this.agreementCheckbox?.value
  }

  user:User={email:'', password:'', nickname:'', phone:'', website:''};
  public onSubmit() :void{
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if(this.status.button==='Register'){
        this.usersService.addUser({email:this.email?.value!, password:this.password?.value!, nickname:this.nickname?.value!, phone:this.phone?.value!, website:this.website?.value!})
        this.form.reset()
      }else{
        this.user['email']=this.email?.value!
        this.user['password']=this.password?.value!
        this.user['nickname']=this.nickname?.value!
        this.user['phone']=this.phone?.value!
        this.user['website']=this.website?.value!
        this.form.reset()
        this.usersService.closeEdit.emit();
        setTimeout(()=>{
          this.agreementCheckbox?.enable();
          this.status={header:'Registration',button:'Register'}
        },300)
      }
    }
  }
  public fillTheField(user:User):void{
    this.user=user
    this.status={header:'Edit',button:'Save'}
    this.form.patchValue({
      email: user['email'],
      password: user['password'],
      confirmPassword: user['password'],
      nickname: user['nickname'],
      phone: user['phone'],
      website: user['website'],
    })
    this.agreementCheckbox?.setValue(true);
    this.agreementCheckbox?.disable();
    this.usersService.openEdit.emit();
  }
  fillFormSubs!:Subscription;
  notifyDeleteSubs!:Subscription;
  ngOnInit(): void {
    this.fillFormSubs=this.usersService.fillFormEvent.subscribe((user:User)=>this.fillTheField(user))
    this.notifyDeleteSubs=this.usersService.notifyDelete.subscribe(()=>this.deleteUser())
  }
  ngOnDestroy(): void {
    this.fillFormSubs.unsubscribe()
    this.notifyDeleteSubs.unsubscribe()
  }
  public deleteUser():void{
    this.status={header:'Registration',button:'Register'}
    this.form.reset();
    this.agreementCheckbox?.enable();
  }
}
