import { Directive,Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private re:Renderer2, private el : ElementRef ) { 
    console.log(el)
    re.setStyle(el.nativeElement, 'color', 'red');
    re.setStyle(el.nativeElement, 'font-size', '23px');

  }

}
