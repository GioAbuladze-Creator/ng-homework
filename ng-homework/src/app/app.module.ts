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

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    HwFormsComponent,
    ExchangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
