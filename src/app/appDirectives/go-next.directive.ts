import { Directive, Input, HostListener, ElementRef, HostBinding } from '@angular/core';

declare var $: any;
@Directive({
  selector: '[appGoNext]'
})
export class GoNextDirective {
  @Input('appGoNext') goNextId: string;
  @HostListener('click')
  click() {
    document.getElementById(this.goNextId).scrollIntoView({behavior: "smooth"});
  }
}
