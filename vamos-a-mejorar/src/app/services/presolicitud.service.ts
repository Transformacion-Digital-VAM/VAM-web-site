import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class PresolicitudService {
  url = 'https://vam-backend.onrender.com/api/solicitudes/'
  constructor(private http: HttpClient ) {

  } 

  guardarSolicitud(solicitud: any): Observable<any> {
    return this.http.post(this.url, solicitud);
  }

  obtenerSolicitudes(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.url)
  }
}
