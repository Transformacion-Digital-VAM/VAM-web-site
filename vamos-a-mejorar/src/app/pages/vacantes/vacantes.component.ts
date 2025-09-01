// En tu archivo vacantes.component.ts
import { Component, OnInit } from '@angular/core';
import { VacantesService, Vacante } from '../../services/vacantes.service';

type SeccionType = 'descripcion' | 'horario' | 'beneficios' | 'requisitos';

@Component({
  selector: 'app-vacantes',
  standalone: false,
  templateUrl: './vacantes.component.html',
  styleUrls: ['./vacantes.component.css']
})
export class VacantesComponent implements OnInit {
  vacantes: Vacante[] = [];
  loading = true;
  error: string | null = null;
  
  // Para controlar las secciones visibles de cada vacante
  seccionesVisibles: {[key: string]: {[key in SeccionType]: boolean}} = {};

  // Para el modal
  selectedVacante: Vacante | null = null;
  modalOpen = false;

  constructor(private vacantesService: VacantesService) {}

  ngOnInit() {
    this.vacantesService.getVacantes().subscribe({
      next: data => {
        this.vacantes = data;
        // Inicializar el estado de las secciones para cada vacante
        this.vacantes.forEach((vacante, index) => {
          this.seccionesVisibles[`vacante-${index}`] = {
            descripcion: false,
            horario: false,
            beneficios: false,
            requisitos: false
          };
        });
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar vacantes.';
        this.loading = false;
      }
    });
  }

  openModal(v: Vacante) {
    this.selectedVacante = v;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedVacante = null;
  }

  // Función para alternar secciones
  toggleSeccion(seccion: SeccionType, index: number) {
    const vacanteKey = `vacante-${index}`;
    if (this.seccionesVisibles[vacanteKey]) {
      this.seccionesVisibles[vacanteKey][seccion] = !this.seccionesVisibles[vacanteKey][seccion];
    }
  }

  // Función para verificar si una sección es visible
  isSeccionVisible(seccion: SeccionType, index: number): boolean {
    const vacanteKey = `vacante-${index}`;
    return this.seccionesVisibles[vacanteKey] && this.seccionesVisibles[vacanteKey][seccion];
  }
}