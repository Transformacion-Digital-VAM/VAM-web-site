import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostulacionService {
  private apiUrl = 'http://localhost:5000/postulacion';

  constructor(private http: HttpClient) {}

  enviarPostulacion(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
