import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
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
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    RouterModule.forChild(appRoutes),
  ],

})
export class FeaturesModule { }
