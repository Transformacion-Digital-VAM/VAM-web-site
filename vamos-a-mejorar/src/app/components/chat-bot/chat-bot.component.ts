import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription, takeWhile } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-bot',
  standalone: false,
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
  
})
export class ChatBotComponent {
  isBubbleVisible = true;

  toggleBubble() {
    this.isBubbleOpen = !this.isBubbleOpen;
  }
  minimizeChat() {
  throw new Error('Method not implemented.');
  }
  isChatOpen: boolean = false; 
  isBubbleOpen: boolean = false; 
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
