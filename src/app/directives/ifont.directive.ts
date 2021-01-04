import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfont]'
})
export class IfontDirective {
  @Input('appIfont') set ifNot(condition: boolean){
    if (!condition) {
      // View
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // hide
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
