import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { isUserLoggedInGuard } from "src/app/core/guards/isLoggedIn.guard";
import { EmplFormComponent } from "./empl-form/empl-form.component";
import { EmplTableComponent } from "./empl-table/empl-table.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeesComponent } from "./employees.component";


@NgModule({
    declarations: [
        EmployeesComponent,
        EmplFormComponent,
        EmplTableComponent,
        EmployeeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                canActivate: [isUserLoggedInGuard],
                component: EmployeesComponent,
            },
            { path: ':id', component: EmployeeComponent }
        ])],
        exports:[
            RouterModule
        ]

})

export class EmployeesModule {

}