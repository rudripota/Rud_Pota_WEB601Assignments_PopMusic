import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
  standalone: true
})
export class HoverAffectDirective {

  @Input() hoverStyle: string = '';

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.styleplus();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.styleminus();
  }

  private styleplus() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'underline' : 'bold';
  }

  private styleminus() {
    this.elm.nativeElement.style[this.hoverStyle] = this.hoverStyle === 'textDecoration' ? 'none' : 'normal';
  }

}