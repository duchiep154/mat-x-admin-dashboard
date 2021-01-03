import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdePopoverTrigger } from '@material-extended/mde';
import { BreakpointServices } from 'src/app/appServices/breakpoint.service';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { ThemeService } from 'src/app/appServices/theme.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MdePopoverTrigger, { static: false }) trigger: MdePopoverTrigger;

  closePopover() {
    this.trigger.togglePopover();
  }

  //------------------------------------------// 
  // Properties Area                          //
  //------------------------------------------//

  theme; // Global Theme
  sideNavClose;

  mobileMode :boolean = false;

  constructor(
    public dialog: MatDialog,
    private _du: DesignUtilityServices,
    private _themeService: ThemeService,
    private _breakPoint: BreakpointServices) {

    this._themeService.theme.subscribe(res => {
      this.theme = res
    });

    this._du.sideNavClose.subscribe(res => {
      this.sideNavClose = res
    });
    
    this._breakPoint.mobileMode.subscribe(res => {
      this.mobileMode = res;
    });

  }

  ngOnInit(): void {
  }

  /**
   * toggleTheme
   */
  // toggleTheme() {
  //   this.theme = !this.theme;
  //   this._themeService.theme.next(this.theme);
  // }

  onSideNavToggle() {
    this.sideNavClose = !this.sideNavClose;
    this._du.sideNavClose.next(this.sideNavClose);
  }



}
