import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `angular-theming-template`;

  navigation = [
    { link: 'buttons', label: 'Buttons' },
    { link: 'card', label: 'Card' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
}
