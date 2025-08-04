import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostulacionService {
  private apiUrl = 'https://vam-backend.onrender.com/postulacion'; 

  constructor(private http: HttpClient) {}

  enviarPostulacion(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
