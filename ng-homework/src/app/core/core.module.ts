import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { FeaturesModule } from '../features/features.module';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule,
    RouterModule.forChild([]),
  ],
  exports:[
    TopBarComponent,
  ]
})
export class CoreModule { }