import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './homework1/form/form.component';
import { UsersComponent } from './homework1/users/users.component';
import { HwFormsComponent } from './homework1/app-forms/app-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExchangerComponent } from './homework2/exchanger/exchanger.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {

    //   }
    // ]
  },
  {path:'',redirectTo:'/login',pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    HwFormsComponent,
    ExchangerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
