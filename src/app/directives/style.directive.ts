import {Directive, ElementRef, Renderer2} from '@angular/core';
import {ElementAnimationState} from '@angular/animations/browser/src/render/transition_animation_engine';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    console.log(el);
    // el.nativeElement.style.color = 'red';
  }

}
