import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  darkMode: boolean = true;
  themeActive: 'Dark'| 'Light' = 'Dark';



  themeChange() {
    this.darkMode = !this.darkMode;
    this.changeThemeLabel();
  }

  changeThemeLabel() {
    if (this.darkMode) {
      this.themeActive = 'Dark';
    }else {
      this.themeActive = 'Light';
    }
  }

}
