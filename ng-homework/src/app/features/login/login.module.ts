import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { FormsModule } from "../users/app-forms/app-forms.module";
import { isUserLoggedOutGuard } from "src/app/core/guards/isLoggedOut.guard";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'login', canActivate: [isUserLoggedOutGuard], component: LoginComponent },
        ])
    ],
})

export class LoginModule { }