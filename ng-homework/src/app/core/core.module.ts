import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './navigation/top-bar/top-bar.component';
import { FeaturesModule } from '../features/features.module';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    FeaturesModule,
    RouterModule,
  ],
  exports:[
    TopBarComponent,
  ]
})
export class CoreModule { }
