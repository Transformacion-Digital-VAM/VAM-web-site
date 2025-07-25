import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: false,
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {


  isChatOpen = false;

  slides = [
    { title: 'Nuestra Misión', image: 'misión.jpg', text: 'Dar oportunidad…' },
    { title: 'Nuestra Visión', image: 'visión.jpg', text: 'Somos la mejor…' }
  ];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

}
