import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';
import { interval, takeWhile } from 'rxjs';
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
