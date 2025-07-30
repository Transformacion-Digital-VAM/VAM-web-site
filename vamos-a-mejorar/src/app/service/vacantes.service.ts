import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vacante {
  _id: string;
  titulo: string;
  area: string;
  descripcion: string;
  requisitos: string[];
  beneficios: string[];
  horario: { dias: string; horas: string };
  ubicacion: string;
  modalidad: string;
  tipo: string;
  fecha?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VacantesService {
  // Asegúrate de apuntar a la ruta correcta del backend
  private apiUrl = 'http://localhost:5000/vacantes';

  constructor(private http: HttpClient) { }

  getVacantes(): Observable<Vacante[]> {
    return this.http.get<Vacante[]>(this.apiUrl);
  }

  getVacanteById(id: string): Observable<Vacante> {
    return this.http.get<Vacante>(`${this.apiUrl}/${id}`);
  }
}
