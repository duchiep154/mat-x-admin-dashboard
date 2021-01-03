import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { BreakpointServices } from './appServices/breakpoint.service';
import { HelperService } from './appServices/helper.service';
import { ThemeService } from './appServices/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mobileMode;

  constructor(
    public overlayContainer: OverlayContainer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _du: DesignUtilityServices,
    private _themeService:ThemeService,
    private _breakPoint: BreakpointServices
  ) {
    this._themeService.theme.subscribe(res => {
      this.componentCssClass = res
    });
    this._breakPoint.mobileMode.subscribe(res => {
      this.mobileMode = res
    });
  }
  @HostBinding('class') componentCssClass;
  sidenav = false;

  // Scroll to Top (Starts)
  isShow: boolean;
  topPosToStartShowing = 200;




  ngOnInit(): void {
    //////////////////////////////////////////
    // Meta Title & Description Code Starts //
    //////////////////////////////////////////

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
      .subscribe((event) => {
        setTimeout(() => {
          // document.getElementById('wrapper').style.top = null;
          // document.getElementsByTagName('html')[0].classList.remove('hideScroll');
          window.scrollTo(0, 0);
          if(this.mobileMode){
            this._du.sideNavClose.next(true);
          }
        }, 200);
      });

    //////////////////////////////////////////
    //  Meta Title & Description Code Ends  //
    //////////////////////////////////////////

    this.appItialization();
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  // Scroll to Top (ends)


  /**
   * intialize app
   * call required services
   */
  appItialization(): void {
  }

}
