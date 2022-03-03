import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()  highlightColor: string;
 constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "green";
}

@HostListener('mouseenter') onMouseEnter(){
  this.highlight(this.highlightColor);
}
@HostListener('mouseleave') onMouseLeave(){
 this.highlight(null);
}
private highlight(color:string){
 this.elementRef.nativeElement.style.backgroundColor =color;
}




}
