import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { interval, Subscription, takeWhile } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [CommonModule, TabsModule, RouterModule]
})
export class InicioComponent {
 isChatOpen: boolean = false; 
 displayedText = '';
  private fullText = "Chatea con nuestro asesor virtual";

  private typingSubscription?: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingAnimation();
    }
  }

  ngOnDestroy(): void {
    if (this.typingSubscription) {
      this.typingSubscription.unsubscribe();
    }
  }

  startTypingAnimation(): void {
    this.typingSubscription = interval(88) // Intervalo de 100ms entre caracteres
      .pipe(
        takeWhile(index => index <= this.fullText.length)
      )
      .subscribe(index => {
        this.displayedText = this.fullText.substring(0, index);
      });
  }


  toggleChat() {
    this.isChatOpen = !this.isChatOpen; 
  }
}
