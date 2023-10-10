import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { LoginModule } from './login/login.module';

const appRoutes: Routes = [
  { path: 'users', loadChildren: () => import('./users/app-forms/app-forms.module').then(m => m.HwFormsModule) },
  { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  imports: [
    LoginModule,
    RouterModule.forChild(appRoutes),
  ],
  exports:[
    RouterModule
  ]

})
export class FeaturesModule { }
