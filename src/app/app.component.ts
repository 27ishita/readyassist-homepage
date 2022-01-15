import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taxi-services';
  gallery = [
    'https://www.readyassist.in/assets/banner/driveu.png',
    'https://www.readyassist.in/assets/banner/shell.png',
  ];
}
