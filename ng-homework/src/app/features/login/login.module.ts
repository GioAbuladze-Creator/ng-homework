import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { LoginComponent } from "./login.component";
import { HwFormsModule } from "../users/app-forms/app-forms.module";
import { RouterModule } from "@angular/router";
import { isUserLoggedOutGuard } from "src/app/core/guards/isLoggedOut.guard";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        HwFormsModule,
        RouterModule.forChild([
            { path: 'login', canActivate: [isUserLoggedOutGuard], component: LoginComponent },
        ])
    ],
})

export class LoginModule { }