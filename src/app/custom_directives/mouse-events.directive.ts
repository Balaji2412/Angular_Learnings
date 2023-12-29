import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEvents]',
})
export class MouseEventsDirective {

   @Input() appMouseEvents = '';

  constructor(private Ef: ElementRef) {}

    @HostListener("mouseenter") onMouseEnter(){
       this.highlight(this.appMouseEvents);
    }
    // @HostListener("mouseover") onMouseOver(){
    //   this.highlight1();
    // }
    @HostListener("mouseleave") onMouseLeave(){
      this.Ef.nativeElement.style.backgroundColor="";
    }

    private highlight(color:string) {
      this.Ef.nativeElement.style.backgroundColor = color;
    }
    private highlight1() {
      this.Ef.nativeElement.style.backgroundColor = "orange";
    }

}
