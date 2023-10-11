import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { EmplFormService } from './empl-form/empl-form.service';
import { EmplFormComponent } from './empl-form/empl-form.component';
import { EmplTableComponent } from './empl-table/empl-table.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  standalone: true,
  imports: [
    EmplFormComponent,
    EmplTableComponent,
    EmployeeComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class EmployeesComponent {
  constructor(
    private emplFormService: EmplFormService
  ) { }
  onOpenModal() {
    this.emplFormService.notifyToOpen.emit()
  }
}
