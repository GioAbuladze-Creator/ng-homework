import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { TopBarComponent } from './core/navigation/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[
    RouterOutlet,
    RouterLink,
    TopBarComponent
  ]
})
export class AppComponent {
  title = 'ng-homework';
}

