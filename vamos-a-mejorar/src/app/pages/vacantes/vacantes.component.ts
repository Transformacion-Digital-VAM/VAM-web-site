import { Component, OnInit } from '@angular/core';
import { VacantesService, Vacante } from '../../service/vacantes.service';

@Component({
  selector: 'app-vacantes',
  standalone: false,
  templateUrl: './vacantes.component.html',
  styleUrl: './vacantes.component.css'
})
export class VacantesComponent {
    vacantes: Vacante[] = [];
  loading = true;
  error: string | null = null;

  constructor(private vacantesService: VacantesService) {}

  ngOnInit(): void {
    this.vacantesService.getVacantes().subscribe({
      next: (data) => {
        this.vacantes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar vacantes.';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
