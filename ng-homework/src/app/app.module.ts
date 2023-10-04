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
import { isUserLoggedInGuard } from './services/isLoggedIn.guard';
import { isUserLoggedOutGuard } from './services/isLoggedOut.guard';
import { ErrorComponent } from './error.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const appRoutes: Routes = [
  {
    path: 'login',
    canActivate: [isUserLoggedOutGuard],
    component: LoginComponent
  },
  { path: 'users', canActivate: [isUserLoggedInGuard], component: HwFormsComponent },
  { path: 'currency', canActivate: [isUserLoggedInGuard], component: ExchangerComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    HwFormsComponent,
    ExchangerComponent,
    LoginComponent,
    TopBarComponent
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
