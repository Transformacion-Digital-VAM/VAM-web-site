import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  standalone: false,
  templateUrl: './comunidad.component.html',
  styleUrl: './comunidad.component.css'
})
export class ComunidadComponent {
seccionesVisibles: boolean[] = [false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = ['artixan', 'atencion', 'inclusion', 'despensas'].indexOf(id);
          if (index !== -1) {
            this.seccionesVisibles[index] = true;
            
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar cada sección
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => observer.observe(seccion));
  }
}
