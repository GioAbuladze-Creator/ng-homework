import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { UsersComponent } from "../users/users.component";
import { FormsComponent } from "./app-forms.component";
import { isUserLoggedInGuard } from "src/app/core/guards/isLoggedIn.guard";
import { FormComponent } from "../form/form.component";


@NgModule({
    declarations: [
        UsersComponent,
        FormsComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild([{
            path:'',
            canActivate:[isUserLoggedInGuard],
            component:FormsComponent
        }])
        
    ],
    exports:[
        FormComponent,
    ]
    
})

export class FormsModule { }