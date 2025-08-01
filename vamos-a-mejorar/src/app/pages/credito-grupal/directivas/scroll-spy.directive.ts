import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective implements OnInit {
  @Input() sectionId!: string;
  @Output() sectionInView = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offset = 150; // margen de activación
    if (rect.top >= 0 && rect.top < window.innerHeight - offset) {
      this.sectionInView.emit(this.sectionId);
    }
  }
}
