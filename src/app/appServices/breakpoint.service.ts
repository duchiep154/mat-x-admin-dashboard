import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class BreakpointServices {

  portraitMode = new BehaviorSubject(false); // Portrait Orientation
  mediumMode = new BehaviorSubject(false); // Portrait Orientation
  mobileMode = new BehaviorSubject(false); // Mobile Orientation
      
  constructor(
    private breakpointObserver: BreakpointObserver) {
      this.getScreenOrientation();
    }


  //------------------------------------------// 
  // Screen Orientation                       //
  //------------------------------------------//

  getScreenOrientation() {
    this.breakpointObserver.observe([
      '(orientation: portrait)',
      '(max-width: 1200px)',
      '(max-width: 767px)'
    ]).subscribe(result => {
      const portraitMode = result.breakpoints['(orientation: portrait)'];
      const mediumMode = result.breakpoints['(max-width: 1200px)'];
      const mobileMode = result.breakpoints['(max-width: 767px)'];
      console.log('Portrait Mode => ', portraitMode);
      console.log('Medium Mode => ', mediumMode);
      console.log('Mobile Mode => ', mobileMode);
      this.portraitMode.next(portraitMode);
      this.mediumMode.next(mediumMode);
      this.mobileMode.next(mobileMode);
    });
  } 
}
