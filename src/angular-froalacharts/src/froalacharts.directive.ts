import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFroalachartsDirective]'
})
export class FroalaChartsDirective {

  constructor(private el: ElementRef) {
  }

}
