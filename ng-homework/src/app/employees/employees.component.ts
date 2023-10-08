import { Component } from '@angular/core';
import { EmplFormService } from './empl-form/empl-form.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  constructor(
    private emplFormService: EmplFormService
  ) { }
  onOpenModal() {
    this.emplFormService.notifyToOpen.emit()
  }
}
