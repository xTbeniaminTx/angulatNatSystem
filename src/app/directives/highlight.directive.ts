import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

 constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "green";
}

@HostListener('mouseenter') onMouseEnter(){
  this.highlight('yellow');
}
@HostListener('mouseleave') onMouseLeave(){
 this.highlight(null);
}
private highlight(color:string){
 this.elementRef.nativeElement.style.backgroundColor =color;
}




}
