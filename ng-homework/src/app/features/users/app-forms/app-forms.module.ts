import { NgModule } from "@angular/core";

import { UsersComponent } from "../users/users.component";
import { HwFormsComponent } from "./app-forms.component";
import { RouterModule } from "@angular/router";
import { isUserLoggedInGuard } from "src/app/core/guards/isLoggedIn.guard";
import { FormComponent } from "../form/form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        UsersComponent,
        HwFormsComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([{
            path:'',
            canActivate:[isUserLoggedInGuard],
            component:HwFormsComponent
        }])
        
    ],
    exports:[
        FormComponent,
    ]
    
})

export class HwFormsModule { }