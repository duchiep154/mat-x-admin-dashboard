import { Component } from '@angular/core';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { BreakpointServices } from 'src/app/appServices/breakpoint.service';
import { ThemeService } from 'src/app/appServices/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  theme; // Global Theme
  sideNavClose;
  mobileMode;
  options: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'cheese'];

  
  constructor(
    private _du: DesignUtilityServices,
    private _themeService: ThemeService,
    private _breakPoint : BreakpointServices
  ) {
    this._themeService.theme.subscribe(res => {
      this.theme = res;
    });
    this._du.sideNavClose.subscribe(res => {
      this.sideNavClose = res;
    });
    // this._breakPoint.portraitMode.subscribe(res => {
    //   this._du.sideNavClose.next(res);
    // });
    this._breakPoint.mediumMode.subscribe(res => {
      this._du.sideNavClose.next(res);
    });
    this._breakPoint.mobileMode.subscribe(res => {
      this.mobileMode = res;
    });
  }

  closeNav(){
    this._du.sideNavClose.next(true);
  }
}