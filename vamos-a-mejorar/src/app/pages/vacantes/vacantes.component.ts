// src/app/vacantes/vacantes.component.ts
import { Component, OnInit } from '@angular/core';
import { VacantesService, Vacante } from '../../services/vacantes.service';

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

  // Para el modal
  selectedVacante: Vacante | null = null;
  modalOpen = false;

  constructor(private vacantesService: VacantesService) {}

  ngOnInit() {
    this.vacantesService.getVacantes().subscribe({
      next: data => {
        this.vacantes = data;
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
}


