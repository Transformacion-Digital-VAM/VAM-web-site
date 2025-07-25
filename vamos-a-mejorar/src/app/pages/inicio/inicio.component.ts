import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
