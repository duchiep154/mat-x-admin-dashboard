import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { ThemeService } from 'src/app/appServices/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements OnInit {

  darkThemeEnable: boolean = true;
  theme; // Global Theme
  @HostBinding('class') componentCssClass;
  constructor(
    private _du: DesignUtilityServices,
    public overlayContainer: OverlayContainer,
    private _themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    this.getThemeValueFromStorage();
    this.setTheme();
    this._themeService.theme.subscribe(res => {
      this.theme = res;
    });
  }

  /**
   * get theme value from storage
   */
  getThemeValueFromStorage(): void {
    this.darkThemeEnable = localStorage.getItem('darkThemeEnable') ?
      JSON.parse(localStorage.getItem('darkThemeEnable')) : this.darkThemeEnable;

  }
  /**
   * Set Theme
   */
  setTheme() {
    if (this.darkThemeEnable) {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.componentCssClass = 'dark-theme';
      this._themeService.theme.next('dark-theme');
   
    } else {
      this.removeThemeClass();
      this.overlayContainer.getContainerElement().classList.add('light-theme');
      this.componentCssClass = 'light-theme';
      this._themeService.theme.next('light-theme');
    }
    this.setThemeInLocalStorage();
  }

  /**
   * Remove Theme classes
   */
  removeThemeClass() {
    const classList = this.overlayContainer.getContainerElement().classList;
    for (let index = 0; index < classList.length; index++) {
      const className = classList[index];
      if (className.indexOf('theme') > -1) {
        this.overlayContainer.getContainerElement().classList.remove(className);
      }
    }
  }

  /**
   * set theme in local storage 
   * @param darkTheme 
   */
  setThemeInLocalStorage() {
    localStorage.setItem('darkThemeEnable', JSON.stringify(this.darkThemeEnable));
  }

  
}
