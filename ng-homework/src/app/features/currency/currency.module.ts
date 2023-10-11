import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { ExchangerComponent } from "./exchanger/exchanger.component";
import { isUserLoggedInGuard } from "src/app/core/guards/isLoggedIn.guard";

@NgModule({
    declarations:[ExchangerComponent],
    imports:[
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forChild([{
            path:'',
            canActivate:[isUserLoggedInGuard],
            component:ExchangerComponent
        }])
    ]
})

export class CurrencyModule{

}