import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-credi-impacto-vam',
  standalone: false,
  templateUrl: './credi-impacto-vam.component.html',
  styleUrl: './credi-impacto-vam.component.css'
})
export class CrediImpactoVamComponent implements OnInit, OnDestroy {
  private autoplayInterval: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.autoplayInterval = setInterval(() => {
        if (!this.isDragging) {
          this.moveCarousel();
        }
      }, 3500); // Cambia la imagen cada 3.5 segundos
    }
  }

  ngOnDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
  carouselItems = [
    { title: 'Focos ahorradores', img: '../../../assets/images/focos-catalogo.jpeg', alt: '1' },
    { title: 'Captadores de agua', img: '../../../assets/images/catalizador.jpeg', alt: '2' },
    { title: 'Paneles solares', img: '../../../assets/images/paneles-solares.jpeg', alt: '3' },
    { title: 'Calentadores de agua', img: '../../../assets/images/calentador-solar.jpeg', alt: '4' },
    { title: 'Aerogeneradores portátiles', img: '../../../assets/images/aerogeneradores.jpeg', alt: '5' }
  ];
  currentIndex = 0;
  transitionStyle = 'transform 0.5s ease';

  // Touch/Pointer helpers
  private startX = 0;
  private isDragging = false;
  private dragThreshold = 20;


  moveCarousel() {
    if (this.currentIndex < this.carouselItems.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.setTransition();
  }

  moveCarouselBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.carouselItems.length - 1;
    }
    this.setTransition();
  }

  moveToIndex(index: number) {
    this.currentIndex = index;
    this.setTransition();
  }

  setTransition() {
    this.transitionStyle = 'transform 0.5s ease';
  }

  clearTransition() {
    this.transitionStyle = 'none';
  }

  // Pointer events (desktop)
  onPointerDown(event: PointerEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.clearTransition();
  }

  onPointerMove(event: PointerEvent) {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.startX;
    // Optionally, you can add drag effect here
  }

  onPointerUp(event: PointerEvent) {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.startX;
    this.isDragging = false;
    if (deltaX > this.dragThreshold) {
      this.moveCarouselBack();
    } else if (deltaX < -this.dragThreshold) {
      this.moveCarousel();
    } else {
      this.setTransition();
    }
  }

  // Touch events (mobile)
  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
    this.clearTransition();
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    // Optionally, you can add drag effect here
  }

  onTouchEnd(event: TouchEvent) {
    if (!this.isDragging) return;
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - this.startX;
    this.isDragging = false;
    if (deltaX > this.dragThreshold) {
      this.moveCarouselBack();
    } else if (deltaX < -this.dragThreshold) {
      this.moveCarousel();
    } else {
      this.setTransition();
    }
  }
}
