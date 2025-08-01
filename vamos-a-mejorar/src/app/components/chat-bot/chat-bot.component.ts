import { Component } from '@angular/core';
import { interval, takeWhile } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-bot',
  standalone: false,
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
  
})
export class ChatBotComponent {
minimizeChat() {
throw new Error('Method not implemented.');
}
isChatOpen: boolean = false; 
 displayedText = '';
  private fullText = "Chatea con nuestro asesor virtual";

  ngOnInit(): void {
    this.startTypingAnimation();
  }


  
  startTypingAnimation(): void {
    interval(88) // Intervalo de 100ms entre caracteres
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
