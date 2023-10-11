import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';
import { EmployeesService } from '../shared/employees.service';
import { Employee } from '../shared/employee.interface';
import { EmplFormService } from './empl-form.service';

declare var window: any;

@Component({
  selector: 'app-empl-form',
  templateUrl: './empl-form.component.html',
  styleUrls: ['./empl-form.component.scss'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    CommonModule
  ]
})
export class EmplFormComponent implements OnInit, OnDestroy {
  @Input() status = { header: 'Add User' }
  formModal: any;
  public form = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    salary: [0, [Validators.required, Validators.min(1)]],
    age: [0, [Validators.required, Validators.min(1), Validators.pattern('^[0-9]*$')]]
  })

  openNotification!:Subscription;
  closeNotification!:Subscription;

  constructor(
    private fb: FormBuilder,
    private emplService: EmployeesService,
    private emplFormService:EmplFormService,
    private route:ActivatedRoute
  ) { }

  get name() {
    return this.form.get('name')
  }
  get salary() {
    return this.form.get('salary')
  }
  get age() {
    return this.form.get('age')
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      if(this.status.header==='Add User'){
        this.emplService.addEmployee(this.form.value as Employee)
        .subscribe(() =>this.emplService.notifyTofetch.emit())
        this.closeModal()
        this.form.reset()
      }else{
        this.emplService.updateEmployee(this.form.value as Employee,this.route.snapshot.paramMap.get('id'))
        .subscribe(() =>this.emplService.notifyTofetch.emit())
        this.closeModal()
        this.form.reset()
      }
    }

  };

  isDisabled() {
    if (this.form.invalid) {
      return true
    }
    return false
  }
  openModal() {
    this.formModal.show()
    if(this.status.header==='Edit User'){
      let id=this.route.snapshot.paramMap.get('id')
      if(id){
        this.emplService.fetchEmployee(+id).subscribe((empl)=>{
          this.form.patchValue(empl)
        })
      }
    }
    
      
  }
  closeModal() {
    this.formModal.hide()
  }
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('employeeModal')
    )
    this.openNotification= this.emplFormService.notifyToOpen.subscribe(() => this.openModal())
    this.closeNotification=this.emplFormService.notifyToClose.subscribe(() => this.closeModal())
  }
  ngOnDestroy():void{
    this.openNotification.unsubscribe()
    this.closeNotification.unsubscribe()
  }
}
