import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/red.css' ;
    this.linkTheme?.setAttribute('href', theme);
   }

  getCurrentTheme() {
    return this.linkTheme?.getAttribute('href');
  }

  changeTheme(theme: string) {
    const urlTheme = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
  }
}
