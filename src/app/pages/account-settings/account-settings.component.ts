import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  private links: NodeListOf<Element> | undefined;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    this.links?.forEach((element: Element) => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl =`./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.settingsService.getCurrentTheme();
      if (currentTheme === btnThemeUrl) {
        element.classList.add('working');
      }
    });

  }

}
