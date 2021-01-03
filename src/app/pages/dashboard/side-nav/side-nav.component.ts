import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { BreakpointServices } from 'src/app/appServices/breakpoint.service';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { ThemeService } from 'src/app/appServices/theme.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  theme; // Global Theme
  mobileMode: boolean = false;

  sideNavClose: boolean;
  nav = [
    { icon: 'dashboard', title: 'Dashboard', items: null, link: '/dashboard' },
    { icon: 'person', title: 'User Profile', items: null, link: 'user-profile' },
    { icon: 'table', title: 'Table List', items: null, link: 'tables' },
    { icon: 'spellcheck', title: 'Typography', items: null, link: 'typography' },
    { icon: 'radio_button_checked', title: 'Icons', items: null, link: 'icons' },
    { icon: 'map', title: 'Maps', items: null, link: 'maps' },
    { icon: 'notifications', title: 'Notifications', items: null, link: 'notifications' },
  ]
  constructor(
    private _du: DesignUtilityServices,
    private _themeService: ThemeService,
    private _breakPoint: BreakpointServices) {

    this._themeService.theme.subscribe(res => {
      this.theme = res
    });

    this._breakPoint.mobileMode.subscribe(res => {
      this.mobileMode = res;
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this._du.sideNavClose.subscribe(res => {
      if (res) {
        this.accordion.closeAll();
      }
      this.sideNavClose = res;
    });
  }


  openSideNav() {
    this._du.sideNavClose.next(false);
  }


}
