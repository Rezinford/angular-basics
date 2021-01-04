import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import {ElementAnimationState} from '@angular/animations/browser/src/render/transition_animation_engine';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  // @Input() fontWeight = 'normal';
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};
  @HostBinding('style.color') eColor = null;

  constructor(private el: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    console.log(el);
    // el.nativeElement.style.color = 'red';
  }
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }
  @HostListener('mouseenter') onEnter() {
    this.eColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    this.eColor = null;
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
