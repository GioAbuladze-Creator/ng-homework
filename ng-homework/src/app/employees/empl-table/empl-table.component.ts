import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.interface';
import { EmployeesService } from '../shared/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empl-table',
  templateUrl: './empl-table.component.html',
  styleUrls: ['./empl-table.component.scss']
})
export class EmplTableComponent implements OnInit {

  employees: Employee[] = []

  constructor(
    private emplService: EmployeesService,
    private router: Router
  ) { }
  onFetchEmployees() {
    this.emplService.fetchEmployees()
      .subscribe((employeeList) => this.employees = employeeList)
  }
  onNavigate(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(
        ['/employees/',id]
      )
    } else {
      console.error('Invalid ID')
    }
  }
  openModal(){}
  ngOnInit(): void {
    this.onFetchEmployees()
    this.emplService.notifyTofetch
      .subscribe(() => this.onFetchEmployees())
  }
}
