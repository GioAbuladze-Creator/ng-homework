import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../shared/employee.interface';
import { EmployeesService } from '../shared/employees.service';
import { EmplFormService } from '../empl-form/empl-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit,OnDestroy{

  constructor(
    private route: ActivatedRoute,
    private emplService:EmployeesService,
    private emplFormService:EmplFormService,
    private router:Router
  ) { }
  id:any;
  employee!:Employee;
  fetchSub!:Subscription;
  onFetchEmployee(){
    this.emplService.fetchEmployee(this.id).subscribe((empl)=>{
      this.employee=empl
    })
  }

  onDelete(){
    this.emplService.deleteEmployee(this.id).subscribe(()=>{
      this.emplService.notifyTofetch.emit()
    })
    this.router.navigate(['/employees'])
  }

  onEdit() {
    this.emplFormService.notifyToOpen.emit()
  }
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id')
    if(id){
      this.id=id;
    }
    this.onFetchEmployee()
    this.fetchSub=this.emplService.notifyTofetch.subscribe(()=>this.onFetchEmployee())
  }
  ngOnDestroy(): void {
    this.fetchSub.unsubscribe()
  }
}
