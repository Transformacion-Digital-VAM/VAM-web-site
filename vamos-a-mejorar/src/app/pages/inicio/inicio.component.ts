import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [CommonModule, TabsModule]
})
export class InicioComponent {

}
