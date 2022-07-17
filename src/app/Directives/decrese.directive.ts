import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';

@Directive({
  selector: '[bordder]'
})
export class DecreseDirective {

  constructor(private el:ElementRef) {

    this.el.nativeElement.style.border = '5px solid black'
    this.el.nativeElement.style.borderRadius = '50px '
    this.el.nativeElement.style.boxShadow =" 5px 10px #888888 ";

  }

  @HostListener("mouseover") over(){

    this.el.nativeElement.style.boxShadow =" 10px 15px #888888 ";

  }

  @HostListener("mouseout") out(){

    this.el.nativeElement.style.boxShadow =" 5px 10px #888888 ";

  }

}
