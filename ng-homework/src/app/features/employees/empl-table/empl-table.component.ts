import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Employee } from '../shared/employee.interface';
import { EmployeesService } from '../shared/employees.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empl-table',
  templateUrl: './empl-table.component.html',
  styleUrls: ['./empl-table.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class EmplTableComponent implements OnInit {

  employees: Employee[] = []
  choppedEmployees:Employee[]=[]
  pages:number[]=[]
  limit:number=10
  pageNum=1;
  constructor(
    private emplService: EmployeesService,
    private router: Router
  ) { }
  onFetchEmployees() {
    this.emplService.fetchEmployees()
      .subscribe((employeeList) => {
        this.employees = employeeList
        this.pages=Array(Math.ceil(this.employees.length/this.limit)).fill(0).map((x,i)=>i+1)
        this.choppedEmployees=this.employees.slice(0,this.limit)
      })
  }
  onNavigate(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(
        ['/employees',id]
      )
    } else {
      console.error('Invalid ID')
    }
  }
  onChange(event:any){
    this.choppedEmployees=this.employees.slice((event.target.value-1)*this.limit,event.target.value*this.limit)
  }
  ngOnInit(): void {
    this.onFetchEmployees()
    this.emplService.notifyTofetch
      .subscribe(() => {
        this.onFetchEmployees();
        this.pageNum=1;
      })
    
  }
}
