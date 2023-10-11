import { Routes } from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import { isUserLoggedOutGuard } from "./core/guards/isLoggedOut.guard";
import { isUserLoggedInGuard } from "./core/guards/isLoggedIn.guard";

export const APP_ROUTES: Routes = [
    { path: 'login', canActivate: [isUserLoggedOutGuard], component: LoginComponent },
    { path: 'users', canActivate: [isUserLoggedInGuard], loadComponent: () => 
        import('./features/users/app-forms/app-forms.component').then(m => m.FormsComponent) },
    { path: 'currency', canActivate: [isUserLoggedInGuard], loadComponent: () => 
        import('./features/currency/exchanger/exchanger.component').then(m => m.ExchangerComponent) },
    { path: 'employees', canActivate: [isUserLoggedInGuard], loadComponent: () => 
        import('./features/employees/employees.component').then(m => m.EmployeesComponent) },
    { path: 'employees/:id', canActivate: [isUserLoggedInGuard], loadComponent: () => 
        import('./features/employees/employee/employee.component').then(m => m.EmployeeComponent) },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', loadComponent: () => 
        import('./features/error/error.component').then(m => m.ErrorComponent) }
]